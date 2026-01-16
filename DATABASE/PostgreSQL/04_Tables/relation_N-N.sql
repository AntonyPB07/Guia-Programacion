/*Relación N:N - Compatible con: PostgreSQL*/
CREATE TABLE programadores(
    id_programadores SERIAL NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INT NULL,
    correo VARCHAR(255) NULL,
    fecha_Creada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_programadores),
    UNIQUE (correo)
);

CREATE TABLE lenguajes(
    id_lenguaje SERIAL PRIMARY KEY,
    lenguaje VARCHAR(50) NOT NULL
);

CREATE TABLE programadores_lenguajes(
    programadores_lenguajes_id SERIAL PRIMARY KEY,
    programador_id INT,
    lenguaje_id INT,
    FOREIGN KEY (programador_id) REFERENCES programadores(id_programadores),
    FOREIGN KEY (lenguaje_id) REFERENCES lenguajes(id_lenguaje),
    UNIQUE (programador_id, lenguaje_id)
);

--! Cuando es de N:N, debe de existir una tabla intermedia para que así se haga la relación correctamente
--? En PostgreSQL se usa SERIAL en lugar de AUTO_INCREMENT
