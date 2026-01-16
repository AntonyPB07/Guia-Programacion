/*
CREATE TABLE
Lección 13.1: https://youtu.be/OuJerKzV5T0?t=11292
Compatible con: PostgreSQL
*/

-- Crea una tabla llamada "persons" con nombre de columna (atributos) de tipo int, varchar y date
CREATE TABLE persons (
    id INT,
    name VARCHAR(100),
    age INT,
    email VARCHAR(50),
    created DATE
);

/*
CONSTRAINTS: Restricciones
*/

/*
NOT NULL
Lección 13.2: https://youtu.be/OuJerKzV5T0?t=11619
*/

-- NOT NULL: Obliga a que el campo id posea siempre un valor no nulo
CREATE TABLE persons2 (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created DATE
);

/*
UNIQUE
Lección 13.3: https://youtu.be/OuJerKzV5T0?t=11787
*/

-- UNIQUE: Obliga a que el campo id posea valores diferentes
CREATE TABLE persons3 (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created TIMESTAMP,
    UNIQUE(id)
);

/*
PRIMARY KEY
Lección 13.4: https://youtu.be/OuJerKzV5T0?t=11911
*/

-- PRIMARY KEY: Establece el campo id como clave primaria para futuras relaciones con otras tablas
CREATE TABLE persons4 (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created TIMESTAMP,
    UNIQUE(id),
    PRIMARY KEY(id)
);

/*
CHECK
Lección 13.5: https://youtu.be/OuJerKzV5T0?t=12121
*/

-- CHECK: Establece que el campo age sólo podrá contener valores mayores o iguales a 18
CREATE TABLE persons5 (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created TIMESTAMP,
    UNIQUE(id),
    PRIMARY KEY(id),
    CHECK(age >= 18)
);

/*
DEFAULT
Lección 13.6: https://youtu.be/OuJerKzV5T0?t=12243
*/

-- DEFAULT: Establece un valor por defecto en el campo created correspondiente a la fecha del sistema
CREATE TABLE persons6 (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id),
    PRIMARY KEY(id),
    CHECK(age >= 18)
);

/*
SERIAL / AUTO INCREMENT
Lección 13.7: https://youtu.be/OuJerKzV5T0?t=12362
*/

-- SERIAL: Indica que el campo id siempre se va a incrementar en 1 con cada nuevo inserto (PostgreSQL específico)
-- Equivalente a MySQL AUTO_INCREMENT
CREATE TABLE persons7 (
    id SERIAL NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(50),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id),
    PRIMARY KEY(id),
    CHECK(age >= 18)
);

--? CREATE TABLE: se utiliza para crear una nueva tabla en la base de datos.
--? En PostgreSQL, SERIAL es el equivalente a AUTO_INCREMENT de MySQL.
