import React, { useEffect, useState } from "react";
import "./Login.css";
import { formatDocument, matchDocument } from "../../utils/document";
import { changeState } from "../../utils/loading";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LoginForm = () => {
  const [document, setDocument] = useState("")
  const [password, setPassword] = useState("")
  const [documentError, setDocumentError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loading,setLoading] = useState(false);

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

    if (!matchDocument(document)) {
        documentError = "CPF/CNPJ inválido."
    }

    if (password.length < 8) {
        passwordError = "A senha deve ter no mínimo 8 caracteres."
    }

    setDocumentError(documentError)
    setPasswordError(passwordError)

    if (!documentError && !passwordError) {
      console.log("Sucesso!")
    }
}

const handleClick = async () => {
  changeState(setLoading);  
}

useEffect(() => {
  setDocumentError("")
  setPasswordError("")
}, [document, password])

  return (
    <Container
      style={{
        backgroundColor: "white",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        height: "65vh",
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
        Login
      </Typography>
      <form>
        <TextField
          fullWidth
          value={document}
          onChange={handleDocumentChange}
          error={Boolean(documentError)}
          helperText={documentError}
          label="CPF/CNPJ"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Senha"
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(passwordError)}
          helperText={passwordError}
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
        <LoadingButton
          loading={loading}
          className="btn-login"
          variant="contained"
          color="primary"
          onClick={() => {
            handleButton();
            handleClick();
          }}
          fullWidth
        >
          Login
        </LoadingButton>
      </form>
    </Container>
  )
}

export default LoginForm
