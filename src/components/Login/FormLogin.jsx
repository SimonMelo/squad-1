import React from "react";
import "./Login.css"
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@mui/material";

const LoginForm = () => {
  return (
    <Container
      style={{
        backgroundColor: "white",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        height: "400px",
        width: "80%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
      }}
      maxWidth="sm"
    >
      <Typography className="text-modifed" variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField fullWidth label="CPF/CNPJ" variant="outlined" margin="normal" />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <RouterLink
          to="/esqueci-minha-senha"
          style={{ display: "block", textAlign: "left", marginBottom: "10px" }}
        >
          Esqueci minha senha
        </RouterLink>
        <Button className="btn-login" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
