/*Relación 1:1 - Compatible con: MySQL*/
CREATE TABLE equipoFutbol(
    id_equipoFutbol INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE futbolista(
    id_futbolista INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    numero INT NOT NULL UNIQUE,
    id_equipoFut INT,
    FOREIGN KEY (id_equipoFut) REFERENCES equipoFutbol(id_equipoFutbol)
);

INSERT INTO equipoFutbol (nombre) 
    VALUES ('América'),
    ('Real Madrid'),
    ('Liverpool'),
    ('Milan');
    
INSERT INTO futbolista (nombre, numero, id_equipoFut) 
    VALUES ('Henry', 24, 1),
    ('Ronaldo', 7, 4),
    ('Van', 18, 2),
    ('Pirlo', 10, 3);  

--! Cuando es relación 1:1, solo una tabla debe tener llave foránea
