import React, { useEffect, useState } from "react";
import "./Cadastre.css";
import { formatDocument, matchDocument } from "../../utils/document";
import { Container, Typography, TextField, Button } from "@mui/material";

const FormCadastre = () => {
  const [document, setDocument] = useState("")
  const [password, setPassword] = useState("")
  const [documentError, setDocumentError] = useState("")
  const [passwordError, setPasswordError] = useState("")

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
        Cadastre-se
      </Typography>
      <form>
        <TextField
          label={'Nome/Razão Social'}
          fullWidth
          variant="outlined"
          margin="normal"
          inputProps={{ style: { padding: '10px' } }}
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
          inputProps={{ style: { padding: '10px' } }}
        />
        <TextField
          label={'Email'}
          fullWidth
          variant="outlined"
          margin="normal"
          inputProps={{ style: { padding: '10px' } }}
        />
        <TextField
          label={'Confirmar email'}
          fullWidth
          variant="outlined"
          margin="normal"
          inputProps={{ style: { padding: '10px' } }}
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
          inputProps={{ style: { padding: '10px' } }}
        />
        <TextField
          label={'Confirmar senha'}
          fullWidth
          type='password'
          variant="outlined"
          margin="normal"
          inputProps={{ style: { padding: '10px' } }}
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

export default FormCadastre
