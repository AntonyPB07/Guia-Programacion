/*
DISTINCT
Lección 9.1: https://youtu.be/OuJerKzV5T0?t=6089
Compatible con: MySQL
*/

-- Obtiene todos los datos distintos entre sí de la tabla "users"
SELECT DISTINCT * FROM users;

-- Obtiene todos los valores distintos referentes al atributo edad de la tabla "users"
SELECT DISTINCT age FROM users;

--? DISTINCT: se utiliza para no mostrar datos duplicados, es decir, si tenemos varios registros con el mismo nombre, 
--? valor o dato, nos muestra una sola vez ese dato, aunque esté más de una vez en la tabla.
