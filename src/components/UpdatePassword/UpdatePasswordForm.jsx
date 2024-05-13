import React, { useEffect, useState } from "react";
import "./UpdatePasswordForm.css";
import { validateEmail } from "../../utils/email";
import { Container, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { newPasswordPost } from "../../services/Login";

const UpdatePasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [newPasswordError, setNewPasswordError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (event) => {
    const { value } = event.target

    setEmail(value);

    return
  }

  const handlePasswordChange = (event, callback) => {
    const { value } = event.target

    const passwordValue = value.trim().slice(0, 20)

    callback(passwordValue)
  }

  const handleButton = () => {
    setLoading(true)
    let emailError = ''
    let passwordError = ''
    let newPasswordError = ''

    if (!validateEmail(email)) {
      emailError = "Endereço de email inválido."
    }

    if (password.length < 8) {
      passwordError = "A senha deve ter no mínimo 8 caracteres."
    } else if (password !== newPassword) {
      newPasswordError = "Campos 'Nova Senha' e 'Confirmar Nova Senha' devem ser idênticos";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);
    setNewPasswordError(newPasswordError);

    if (!emailError && !passwordError && !newPasswordError) {
      const data = {
        email: email,
        newPassword: password,
        confirmPassword: newPassword
      }
        
        newPasswordPost(data).then(response => {
          console.log("Registro bem-sucedido:", response.data)
        })
      .catch(error => {
        console.error("Erro ao registrar:", error)
      })
      .finally(() => {
        setLoading(false)
        console.log("Finalizado.")
      })
  }
}

useEffect(() => {
  setEmailError("")
  setPasswordError("")
  setNewPasswordError("")
}, [email, password, newPassword])

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
      Recuperar senha
    </Typography>
    <form>
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
        onChange={(event) => handlePasswordChange(event, setPassword)}
        error={Boolean(passwordError)}
        helperText={passwordError}
        type="password"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Confirmar Nova Senha"
        value={newPassword}
        onChange={(event) => handlePasswordChange(event, setNewPassword)}
        error={Boolean(newPasswordError)}
        helperText={newPasswordError}
        type="password"
        variant="outlined"
        margin="normal"
      />
      <Button
        className="btn-login"
        variant="contained"
        color="primary"
        onClick={handleButton}
        fullWidth
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Enviar"}
      </Button>
    </form>
  </Container>
)
}

export default UpdatePasswordForm
