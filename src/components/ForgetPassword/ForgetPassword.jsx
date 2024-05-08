import { useState } from "react";
import logo from "../../img/logogetInfo.png";
import "./ForgetPass.css";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@mui/material";


const ForgetPassword = () => {

  const [loading,setLoading] = useState(false);

  const handleButton = async () => {
    setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
  }
  
  
  
  return (
    <div className="page-forget">
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", marginBottom: "16px" }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ marginLeft: "90px", maxHeight: "30px", maxWidth: "100%" }}
          />
        </Toolbar>
      </AppBar>
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
      >
        <Grid container justifyContent="center">
            <form>
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
        </Grid>
      </Container>
    </div>
  );
};

export default ForgetPassword;
