import React from "react";
import logo from "../../img/logogetInfo.png";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ForgetPassword = () => {
  return (
    <div>
      <AppBar position="static" style={{ marginBottom: "16px" }}>
        <Toolbar style={{ background: "transparent" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ maxHeight: "50px", maxWidth: "100%" }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <form style={{ width: "500px", height: "500px" }}> {/* Aqui definimos largura e altura */}
              <Typography variant="h5" align="center" gutterBottom>
                Esqueci minha senha
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Por favor, informe seu e-mail no campo abaixo para que possamos
                enviar um e-mail para redefinir sua senha.
              </Typography>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth>
                Enviar
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ForgetPassword;
