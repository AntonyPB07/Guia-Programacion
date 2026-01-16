/*
INDEX
Lección 18.1: https://youtu.be/OuJerKzV5T0?t=18219
Compatible con: PostgreSQL
*/

-- Crea un índice llamado "idx_name" en la tabla "users" asociado al campo "name"
CREATE INDEX idx_name ON users(name);

-- Crea un índice único llamado "idx_name" en la tabla "users" asociado al campo "name"
CREATE UNIQUE INDEX idx_name ON users(name);

-- Crea un índice llamado "idx_name_surname" en la tabla "users" asociado a los campos "name" y "surname"
CREATE UNIQUE INDEX idx_name_surname ON users(name, surname);

-- Elimina el índice llamado "idx_name"
DROP INDEX idx_name;

-- Listar todos los índices de una tabla
SELECT * FROM pg_indexes WHERE tablename = 'users';

--? INDEX: es una estructura de datos que acelera el acceso a los datos dentro de una tabla. Permiten que el motor de la base 
--? de datos encuentre rápidamente filas específicas sin tener que recorrer todas las filas de la tabla.
