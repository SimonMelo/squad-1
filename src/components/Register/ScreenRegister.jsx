import React from "react";
import logo from "../../img/logogetInfo.png";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import "../../App.css";
import FormRegister from "./FormRegister";

const ScreenRegister = () => {
  return (
    <div className="page-form">
      <AppBar position="static" style={{ backgroundColor: "transparent", marginBottom: "16 px" }}>
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
            <h1>Crie uma nova conta</h1>
            <p>Já está registrado? <RouterLink className="login-link" to="/">Faça Login</RouterLink></p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormRegister />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ScreenRegister;