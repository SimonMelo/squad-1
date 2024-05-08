import React, { useEffect, useState } from "react";
import "./Login.css";
import { formatDocument, matchDocument } from "../../utils/document";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { loginPost } from "../../services/Login";

const LoginForm = () => {
  const [document, setDocument] = useState("")
  const [password, setPassword] = useState("")
  const [documentError, setDocumentError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loading, setLoading] = useState(false)

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
      const data = {
        cpfCnpj: document,
        password: password
      }
      loginPost(data)
      .then(response => {
        console.log("Registro bem-sucedido:", response.data)
      })
      .catch(error => {
        console.error("Erro ao registrar:", error)
      })
      .finally(() => {
        setLoading(false)
        console.log("Finalizado.")
      });
    }
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

export default LoginForm
