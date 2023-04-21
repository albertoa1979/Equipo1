import React from "react";
import { Link } from "react-router-dom";
import ProductCatalog from "./Catalogo";

function Principal() {
  return (
    <div className="container">
      <h1 className="title">
        Bienvenidos a Agrivet{" "}
        <span aria-label="emoji" role="img"></span>
      </h1>

      <center>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="productos.png"
                  alt="Productos agrícolas"
                  width="425"
                  height="100"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="home.png"
                  alt="Página principal"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="login.png"
                  alt="Iniciar sesión"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="pedidos.jpg"
                  alt="Realizar pedidos"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="Microfono.png"
                  alt="Asistencia por voz"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="CULTIVOS.png"
                  alt="Cultivos disponibles"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="semillas.png"
                  alt="Semillas disponibles"
                  width="200"
                  height="170"
                />
              </td>
            </tr>

            <tr>
              <td>
                                  <img
                    src="descarga.jpg"
                    alt="Descargar catálogo"
                    width="200"
                    height="170"
                  />
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Principal;