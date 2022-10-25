import React from "react";
//import i from "../images/noImageGame.png";
import i from "../images/error404-not-found.gif";
import s from "../style/Error.module.css";

export default function Error() {
  return (
    <div className={s.nogame}>
      <h1>No se encontraron videojuegos</h1>
      <img src={i} alt="nogame" />
    </div>
  );
}
