import React from "react";
import logo from "./img/logogetInfo.png";
import imgCarousel from "./img/iconGetInfo.jpeg"
import FormLogin from "./components/Login/FormLogin";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <AppBar position="static" style={{ marginBottom: "16px" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ maxHeight: "50px", maxWidth: "100%" }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Carousel style={{ marginTop: "16px" }} showArrows={true} showThumbs={false}>
              <div>
                <img src={imgCarousel} alt="Imagem 1" style={{ width: "100%" }} />
                <p className="legend">Legenda 1</p>
              </div>
              <div>
                <img src={imgCarousel} alt="Imagem 2" style={{ width: "100%" }} />
                <p className="legend">Legenda 2</p>
              </div>
              <div>
                <img src={imgCarousel} alt="Imagem 3" style={{ width: "100%" }} />
                <p className="legend">Legenda 3</p>
              </div>
            </Carousel>
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
