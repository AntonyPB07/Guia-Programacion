/*Relación 1:N - Compatible con: PostgreSQL*/
CREATE TABLE empresa(
    id_empresa SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE empleados(
    id_empleado SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad INT,
    id_empresa INT NOT NULL,
    FOREIGN KEY(id_empresa) REFERENCES empresa(id_empresa)
);

--! En la relación 1:N, solo una tabla llevará la llave foránea, y será la tabla donde sea N (muchos)
--? En PostgreSQL se usa SERIAL en lugar de AUTO_INCREMENT
