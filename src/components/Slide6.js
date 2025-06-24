import React from "react";
import "../styles/slide6.css";
import { Slide } from "react-awesome-reveal";

function Slide6() {
  return (
    <div className="slide6-container">
      <Slide direction="left" triggerOnce>
      <h1 className="slide6-title">Tarjetas </h1>
      </Slide>
      <Slide direction="left" triggerOnce>
      <p className="slide6-subtitle">
        ¡Nos encantaría que nos acompañen en este día tan especial! Para
        asegurar su lugar, les pedimos adquirir la tarjeta de ingreso. Tendremos
        diferentes valores que se irán actualizando a medida que se acerque la
        fecha de la boda. Les recomendamos adquirir la suya con anticipación
        para acceder al valor actual.
      </p>
      <button
        className="slide6-btn"
        onClick={() =>
          window.open(
            "https://wa.me/5493865233422?text=Hola%20Cami%20%26%20Will!%20Gracias%20por%20su%20invitaci%C3%B3n...",
            "_blank"
          )
        }
      >
        CONSULTAR
      </button>
      </Slide>
    </div>
  );
}

export default Slide6;
