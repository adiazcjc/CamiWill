import React from "react";
import "../styles/slide4.css";
import img1 from "../imagenes/img1.jpeg";
import img2 from "../imagenes/img2.jpeg";
import img3 from "../imagenes/img3.jpeg";
import img4 from "../imagenes/img4.jpeg";
import { Slide } from "react-awesome-reveal";

function Slide4() {
  return (
    <div className="slide4-container">
      <div className="slide4-icon-top">
        {/* Aquí puedes poner una imagen decorativa si tienes, por ejemplo un SVG o PNG */}
      </div>
      <Slide direction="left" triggerOnce>
        <h1 className="slide4-title">Momentos especiales</h1>
      </Slide>
      <Slide direction="left" triggerOnce>
        <div className="slide4-row slide4-row-top">
          <img src={img1} alt="img1" className="slide4-img" />

          <img src={img2} alt="img2" className="slide4-img" />
        </div>

        <div className="slide4-row">
          <img src={img3} alt="img3" className="slide4-img slide4-img-large" />
        </div>
      </Slide>
      <Slide direction="left" triggerOnce>
        <div className="slide4-row">
          <img src={img4} alt="img4" className="slide4-img slide4-img-large" />
        </div>
      </Slide>
    </div>
  );
}

export default Slide4;
