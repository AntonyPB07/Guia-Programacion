import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Header, Navv } from "./Header.jsx";
import { DatosAlumnos, DatosTrabajador } from "./Alumnos.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1>Bienvenido, Antonio.</h1>
    <Header />
    <Navv title="Primero" />
    <Navv title={true} />
    <Navv title={3} />
    <DatosAlumnos title="Luis" name="Pérez" />
    <DatosTrabajador
      nombre="Antonio"
      edad={24}
      rfc="PEBL001134G01"
      carrera="Ingeniero en Sistemas Computacionales"
      skills={{ lenguaje: "Python", so: "Windows", redes: "SI" }}
    />
    <DatosTrabajador
      nombre="Luis"
      edad={22}
      rfc="PEBL001134G02"
      carrera="Ingeniero en Informática"
      skills={{ lenguaje: "Java", so: "Linux", redes: "SI" }}
    />
  </>
);
