/*
VIEWS
Lección 18.3: https://youtu.be/OuJerKzV5T0?t=19663
Compatible con: PostgreSQL
*/

-- Crea una vista llamada "v_adult_users" con los nombres y edades de usuarios de la tabla "users"
-- que tienen una edad igual o mayor a 18 años.
CREATE VIEW v_adult_users AS
SELECT name, age
FROM users
WHERE age >= 18;

-- Consulta la vista
SELECT * FROM v_adult_users;

-- Elimina la vista llamada "v_adult_users"
DROP VIEW v_adult_users;

-- Forma segura (no genera error si no existe)
DROP VIEW IF EXISTS v_adult_users;

-- Para eliminar una vista y sus dependencias
DROP VIEW IF EXISTS v_adult_users CASCADE;

--? VIEWS: es una consulta SQL almacenada en la base de datos con un nombre asignado. Es una tabla virtual que representa 
--? los resultados de una consulta SQL (se usa en caso de repetir mucho una sentencia).
