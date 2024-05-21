import React from "react";
import logo from "./img/logogetInfo.png";
import FormLogin from "./components/Login/FormLogin";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="page-form">
      <AppBar position="static" style={{ backgroundColor: "transparent", marginBottom: "16px" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ marginLeft: "90px", maxHeight: "30px", maxWidth: "100%" }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>Login</h1>
            <p>Faça o login para entrar em sua conta.</p>
            <p>Não tem uma conta ainda? <RouterLink to="/register" className="login-link">Registre-se</RouterLink>.</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLogin />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;