/*Relación N:N - Compatible con: MySQL*/
CREATE TABLE programadores(
    id_programadores INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INT NULL,
    correo VARCHAR(255) NULL,
    fecha_Creada DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_programadores),
    UNIQUE (correo)
);

CREATE TABLE lenguajes(
    id_lenguaje INT AUTO_INCREMENT PRIMARY KEY,
    lenguaje VARCHAR(50) NOT NULL
);

CREATE TABLE programadores_lenguajes(
    programadores_lenguajes_id INT AUTO_INCREMENT PRIMARY KEY,
    programador_id INT,
    lenguaje_id INT,
    FOREIGN KEY (programador_id) REFERENCES programadores(id_programadores),
    FOREIGN KEY (lenguaje_id) REFERENCES lenguajes(id_lenguaje),
    UNIQUE (programador_id, lenguaje_id)
);

--! Cuando es de N:N, debe de existir una tabla intermedia para que así se haga la relación correctamente
