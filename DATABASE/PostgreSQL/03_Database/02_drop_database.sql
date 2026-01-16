/*
DROP DATABASE
Lección 12.2: https://youtu.be/OuJerKzV5T0?t=11180
Compatible con: PostgreSQL
*/

-- Elimina la base de datos llamada "test"
DROP DATABASE test;

-- Si hay conexiones activas a la base de datos, usar:
DROP DATABASE IF EXISTS test;

--? DROP DATABASE: se utiliza para eliminar una base de datos existente.
--? DROP DATABASE IF EXISTS: evita error si la base de datos no existe.
--? NOTA: Esto elimina la base de datos y todos sus contenidos de forma permanente.
