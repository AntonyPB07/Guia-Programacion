/*
DROP TABLE
Lección 13.8: https://youtu.be/OuJerKzV5T0?t=12412
Compatible con: MySQL
*/

-- Elimina la tabla llamada "persons8"
DROP TABLE persons8;

-- Forma segura (no genera error si no existe)
DROP TABLE IF EXISTS persons8;

--? DROP TABLE: se utiliza para eliminar una tabla existente de la base de datos.
--? DROP TABLE IF EXISTS: evita error si la tabla no existe.
