import React, { useEffect, useState } from "react";
import "../../App.css";
import { formatDocument, matchDocument } from "../../utils/document";
import { Container, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { validateEmail } from "../../utils/email";
import { registerPost } from "../../services/Login";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [documentError, setDocumentError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [loading, setLoading] = useState(false)


  const handleDocumentChange = (event) => {
    const { value } = event.target;

    const formatDoc = formatDocument(value);

    const trimmedDoc = formatDoc.slice(0, 18);

    setDocument(trimmedDoc);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;

    const passwordValue = value.trim().slice(0, 20);

    setPassword(passwordValue);
  };

  const handleButton = () => {
    let documentError = "";
    let passwordError = "";
    let nameError = "";
    let confirmPassError = "";
    let emailError = "";
    let confirmEmailError = "";

    if (!matchDocument(document)) {
      documentError = "CPF/CNPJ inválido.";
    }

    if (password.length < 8) {
      passwordError = "A senha deve ter no mínimo 8 caracteres.";
    }

    if (!name.trim()) {
      nameError = "Campo obrigatório.";
    }

    if (confirmPassword.length < 8) {
      confirmPassError = "A senha deve ter no mínimo 8 caracteres.";
    }

    if (password !== confirmPassword) {
      confirmPassError = "As senhas devem ser iguais.";
    }

    // Verifica se o campo de e-mail está vazio
    if (!email.trim()) {
      emailError = "Campo obrigatório.";
    }

    if (!validateEmail(email)) {
      emailError = "E-mail inválido."
    }

    if (!confirmEmail.trim()) {
      confirmEmailError = "Campo obrigatório.";
    }

    if (email.trim() && confirmEmail.trim() && email !== confirmEmail) {
      confirmEmailError = "Os e-mails devem ser iguais.";
    }

    setDocumentError(documentError);
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPassError);
    setEmailError(emailError);
    setNameError(nameError);
    setConfirmEmailError(confirmEmailError);

    if (!documentError && !passwordError && !confirmPassError && !emailError && !nameError && !confirmEmailError) {
      setLoading(true)
      const data = {
        name: name,
        cpfCnpj: document,
        email: email,
        confirmEmail: confirmEmail,
        password: password,
        confirmPassword: confirmPassword
      }
      registerPost(data)
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
  };
  useEffect(() => {
    setDocumentError("");
    setPasswordError("");
    setNameError("");
    setConfirmPasswordError("");
    setEmailError("");
    setConfirmEmailError("");
  }, [document, name, email, confirmEmail, confirmPassword, password]);

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
      <Typography variant="h5" align="center" gutterBottom>
        Registre-se
      </Typography>
      <form>
        <div className="mb-3">
          <TextField
            label={'Nome/Razão Social'}
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={Boolean(nameError)}
            helperText={nameError}
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <TextField
            label={'CPF/CNPJ'}
            fullWidth
            value={document}
            onChange={handleDocumentChange}
            error={Boolean(documentError)}
            helperText={documentError}
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <TextField
            label={'Email'}
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <TextField
            label={'Confirmar email'}
            fullWidth
            value={confirmEmail}
            onChange={(event) => setConfirmEmail(event.target.value)}
            error={Boolean(confirmEmailError)}
            helperText={confirmEmailError}
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <TextField
            label={'Senha'}
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
            type="password"
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <TextField
            label={'Confirmar senha'}
            fullWidth
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
            type='password'
            variant="outlined"
          />
        </div>
        <div className="mb-3">
          <Button
            className="btn-login"
            variant="contained"
            color="primary"
            onClick={handleButton}
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Cadastrar"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default FormRegister;
