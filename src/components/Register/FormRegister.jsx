import React, { useEffect, useState } from "react";
import "../../App.css";
import { formatDocument, matchDocument } from "../../utils/document";
import { Container, Typography, TextField, Button } from "@mui/material";

const FormRegister = () => {
  const [name, setName] = useState("")
  const [document, setDocument] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [documentError, setDocumentError] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [confirmEmailError, setConfirmEmailError] = useState("")
  const [documentError, setDocumentError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleDocumentChange = (event) => {
    const { value } = event.target

    const formatDoc = formatDocument(value)

    const trimmedDoc = formatDoc.slice(0, 18)

    setDocument(trimmedDoc)
}

  const handlePasswordChange = (event) => {
    const { value } = event.target

    const passwordValue = value.trim().slice(0, 20)

    setPassword(passwordValue)
  }

  const handleButton = () => {
    let documentError = ''
    let passwordError = ''
    let nameError = ''
    let confirmPassError = ''
    let emailError = ''
    let confirmEmailError = ''

    if (!matchDocument(document)) {
        documentError = "CPF/CNPJ inválido."
    }
 
    if (password.length < 8) {
        passwordError = "A senha deve ter no mínimo 8 caracteres."
    }

    if (name.length ?? 0) {
        nameError = "Campo obrigatório."
    }

    if (confirmPassword.length < 8) {
        confirmPasswordError = "A senha deve ter no mínimo 8 caracteres."
    }

    if (password === confirmPassword) {
        confirmPasswordError = "As senhas devem ser iguais."
    }

    if (email === confirmEmail) {
        confirmEmailError = "Os e-mails devem ser iguais."
    }
    
    setDocumentError(documentError)
    setPasswordError(passwordError)
    setConfirmPasswordError(confirmPasswordError)
    setEmailError(emailError)
    setNameError(nameError)
    setConfirmEmailError(confirmEmailError)

    if (!documentError && !passwordError && !confirmEmailError && !emailError && !confirmPasswordError && !nameError) {
      console.log("Sucesso!")
    }
}

useEffect(() => {
  setDocumentError("")
  setPasswordError("")
  setNameError("")
  setConfirmPasswordError("")
  setEmailError("")
  setConfirmEmailError("")
}, [document, name, email, confirmEmail, confirmPassword, password])

  return (
    <Container
      style={{
        backgroundColor: "white",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        height: "80vh",
        width: "30vw",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
      }}
      maxWidth="sm"
    >
      <Typography
        className="text-modifed"
        variant="h5"
        align="center"
        gutterBottom
      >
        Registre-se
      </Typography>
      <form>
        <TextField
          label={'Nome/Razão Social'}
          fullWidth
          value={name.trimStart()}
          error={Boolean(nameError)}
          helperText={nameError}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label={'CPF/CNPJ'}
          fullWidth
          value={document}
          onChange={handleDocumentChange}
          error={Boolean(documentError)}
          helperText={documentError}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label={'Email'}
          value={email}
          error={Boolean(emailError)}
          helperText={emailError}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label={'Confirmar email'}
          value={confirmEmail}
          error={Boolean(confirmEmailError)}
          helperText={confirmEmailError}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label={'Senha'}
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(passwordError)}
          helperText={passwordError}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          label={'Confirmar senha'}
          value={confirmPassword}
          onChange={handlePasswordChange}
          error={Boolean(confirmPasswordError)}
          helperText={confirmPasswordError}
          fullWidth
          type='password'
          variant="outlined"
          margin="normal"
        />
        <Button
          style={{marginTop:20}}
          className="btn-login"
          variant="contained"
          color="primary"
          onClick={handleButton}
          fullWidth
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  )
}

export default FormRegister
