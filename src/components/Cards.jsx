import React from "react";
import Card1 from "./../assets/1.jpeg";
import Card2 from "./../assets/2.jpeg";
import Card3 from "./../assets/3.jpeg";
import "./cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img
          src={Card1} // Imagen de ejemplo (reemplázala con tu imagen)
          alt="Imagen de la carta"
          className="card-image"
        />
        <p className="card-text">Selección 1</p>
      </div>

      <div className="card">
        <img
          src={Card2} // Imagen de ejemplo (reemplázala con tu imagen)
          alt="Imagen de la carta"
          className="card-image"
        />
        <p className="card-text">Selección 2</p>
      </div>

      <div className="card">
        <img
          src={Card3} // Imagen de ejemplo (reemplázala con tu imagen)
          alt="Imagen de la carta"
          className="card-image"
        />
        <p className="card-text">Selección 3</p>
      </div>
    </div>
  );
};

export default Cards;
