import React from "react";
import "./styles.css";
import logo from "./img/logo-acamica.png";

export default function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <h1>Bienvenido/a a Frontend Avanzado con React!</h1>
      <h2>
        Esto es un sandbox de React, configurado con todas las dependencias para
        empezar a trabajar sobre lo que nos interesa, el código.
      </h2>
      <h2>
        Todo lo que edites en la derecha se vera reflejado automáticamente en
        esta pantalla.
      </h2>
      <h2>¿Puedes completar los espacios en blanco?</h2>
      <MiNombre />
      <MiApodo />
      <MiEdad />
      <MyKnowledge />
    </div>
  );
}

function MiNombre() {
  return (
    <h2>
      Hola, mi nombre es <strong> Gabriela Chacon </strong>{" "}
    </h2>
  );
}
function MiApodo() {
  return <h2>pero me dicen Gabi </h2>;
}
function MiEdad() {
  return <h2>y tengo 25 de edad.</h2>;
}
function MyKnowledge() {
  return (
    <div>
      <h2> mis conocimientos </h2>
      <ul>
        <li> Java </li>
        <li> Spring boot </li>
        <li> Photoshop </li>
        <li> Ilustrator </li>
        <li> MySQL </li>
        <li> Git </li>
        <li> Git Flow </li>
      </ul>
    </div>
  );
}

/**
 * EXTRA: Si lograste identificar el patrón de los componentes
 * agrega más información sobre ti :)
 */
