import React from "react";
import "../styles/slide3.css";
import { Slide } from "react-awesome-reveal";
import marcoTop from "../imagenes/marcotop.png";
import marcoDown from "../imagenes/marcodown.png";

function Slide3() {
  return (
    <div className="slide3-container">
      <Slide direction="left" triggerOnce>
        <img src={marcoTop} alt="marcoTop" className="marcoTop" />
      <div className="slide3-icon-top">
        {/* Aquí puedes poner una imagen decorativa si tienes, por ejemplo un SVG o PNG */}
      </div>
      <h1 className="slide3-title">¡Decinos que sí! </h1>
      <p className="slide3-subtitle">
        Confirmación de Asistencia. ¡Esperamos contar con tu presencia!
      </p>
      </Slide>
      <Slide direction="up" triggerOnce>
      <button
        className="slide3-btn"
        onClick={() =>
          window.open(
            "https://wa.me/5493865233422?text=Hola%20Cami%20%26%20Will!%20Gracias%20por%20su%20invitaci%C3%B3n...",
            "_blank"
          )
        }
      >
        CONFIRMAR
      </button>
      </Slide>
      <img style={{marginTop: ""}} src={marcoDown} alt="marcoDown" className="marcoDown" />
    </div>
  );
}

export default Slide3;
