import React, { Fragment } from "react";

export function DatosAlumnos({title, name}) {
    console.log(title, name);
    return (
        <div>
            <p>
                El alumno {title} {name} quiere trabajar en IBSolutionsGroup.
            </p>
        </div>
    );
    }


    export function DatosTrabajador({nombre, edad, rfc, carrera, skills}){
        console.log(nombre, edad, rfc, carrera, skills);    
        return (
            <div>
                <h3>Su nombre es: {nombre}</h3>
                <p>Tiene {edad} años</p>
                <p>Su RFC es: {rfc}</p>
                <p>Estudió la carrera de: {carrera}</p>
                <p>Lenguaje de programación es: {skills.lenguaje}</p>
                <p>El sistema operativo que mejor maneja es: {skills.so}</p>
                <p>{skills.redes} sabe de redes.</p>
            </div>
        );
    }