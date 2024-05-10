import React, { useEffect, useState } from "react";
import "./UpdatePasswordForm.css";
import { validateEmail } from "../../utils/email";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { updatePassword } from "../../services/Login";

const UpdatePasswordForm = () => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordConfirmationError, setPasswordConfirmationError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (event) => {
    const { value } = event.target
    
    setEmail(value);
    
    return
}

  const handlePasswordChange = (event,callback) => {
    const { value } = event.target

    const passwordValue = value.trim().slice(0, 20)

    callback(passwordValue)
  }

  const handleButton = () => {
    let emailError = ''
    let passwordError = ''
    let passwordConfirmationError = ''
    
    if (!validateEmail(email)) {
        emailError = "Endereço de email inválido."
    }

    if (password.length < 8) {
        passwordError = "A senha deve ter no mínimo 8 caracteres."
    }else if(password !== passwordConfirmation){
        passwordConfirmationError = "Campos 'Nova Senha' e 'Confirmar Nova Senha' devem ser idênticos";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);
    setPasswordConfirmationError(passwordConfirmationError);
    
    if (!emailError && !passwordError && !passwordConfirmationError) {
      const data = {
        email: email,
        currentPassword: currentPassword,
        password: password
      }
      //Funcao sincrona
      const response = updatePassword(data);
      console.log("Response data", response.data)
    //   .then(response => {
    //     console.log("Registro bem-sucedido:", response.data)
    //   })
    //   .catch(error => {
    //     console.error("Erro ao registrar:", error)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //     console.log("Finalizado.")
    //   });
    }
}

useEffect(() => {
  setEmailError("")
  setPasswordError("")
}, [email, password,passwordConfirmation,currentPassword])

  return (
    <Container
    style={{
      backgroundColor: "white",
      marginTop: "50px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      width: "30vw",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
      minHeight: "400px",
    }}
      maxWidth="sm"
    >
      <Typography
        className="text-modifed"
        variant="h5"
        align="center"
        gutterBottom
      >
        Mudar sua Senha
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Senha Antiga"
          value={currentPassword}
          onChange={(event) => handlePasswordChange(event,setCurrentPassword)}
          error={false}
          helperText={''}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          value={email}
          onChange={handleEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Senha"
          value={password}
          onChange={(event) => handlePasswordChange(event,setPassword)}
          error={Boolean(passwordError)}
          helperText={passwordError}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirmar Nova Senha"
          value={passwordConfirmation}
          onChange={(event) => handlePasswordChange(event,setPasswordConfirmation)}
          error={Boolean(passwordConfirmationError)}
          helperText={passwordConfirmationError}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <RouterLink
          to="/esqueci-minha-senha"
          className="forgetPass"
        >
          Esqueci minha senha
        </RouterLink>
        <Button
          className="btn-login"
          variant="contained"
          color="primary"
          onClick={handleButton}
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>
    </Container>
  )
}

export default UpdatePasswordForm
