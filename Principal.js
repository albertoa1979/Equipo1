import React from "react";
import { Link } from "react-router-dom";
import "./Principal.css";
import ProductCatalog from "./Catalogo";

function Principal() {
  return (
    <div className="container">
      <h1 className="title">
        Bienvenidos a Agrivet <span aria-label="emoji" role="img"></span>
      </h1>
      <div className="images-container">
        <Link to={ProductCatalog}>
          <img src="productos.png" alt="Productos Agrivet" />
        </Link>
     
        <img src="home.png" alt="Página de inicio de Agrivet" />
        <img src="login.png" alt="Página de inicio de sesión de Agrivet" />
        <img src="pedidos.jpg" alt="Página de pedidos de Agrivet" />
        <img src="Microfono.png" alt="Servicio de atención al cliente de Agrivet" />
        <img src="CULTIVOS.png" alt="Cultivos de Agrivet" />
        <img src="semillas.png" alt="Semillas de Agrivet" />
        <img src="descarga.jpg" alt="Descarga de documentos de Agrivet" />
      </div>
    </div>
  );
}

export default Principal;