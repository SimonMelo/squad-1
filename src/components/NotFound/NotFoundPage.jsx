import React from "react";
import logo from "../../img/logogetInfo.png";
import {
  AppBar,
  Toolbar,
} from "@mui/material";
import img from "../../img/404error.png";
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <>
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
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="text-center">
          <img
            src={img}
            alt="Imagem"
            style={{ maxWidth: "350px", maxHeight: "350px",  marginTop: "-200px" }}
            className="img-fluid"
          />
          <h1 style={{ marginTop: "-20px", fontSize: "25px" }}>
            Acho que você acabou pegando o caminho errado!
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
