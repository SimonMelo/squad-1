import React from "react";
import img from "../../img/404error.png"
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        {/* Adicione sua imagem aqui */}
        <img src={img} alt="Imagem" style={{ maxWidth: "400px", maxHeight: "400px" }} className="img-fluid" />

        <h1 style={{ marginTop: "-20px", fontSize: "25px" }}>Acho que você acabou pegando o caminho errado!</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
