/*
VIEWS
Lección 18.3: https://youtu.be/OuJerKzV5T0?t=19663
*/

-- Crea unaa vista llamada "v_adult_users" con los nombres y edades de usuarios de la table "users"
-- que tienen una edad igual o mayor a 18 años.
CREATE VIEW v_adult_users AS
SELECT name, age
FROM users
WHERE age >= 18;

SELECT * FROM v_adult_users;

-- Elimina la vista llamada "v_adult_users"
DROP VIEW v_adult_users;


--? VIEWS: es una consulta SQL almacenada en la base de datos con un nombre asignado. Es una tabla virtual que representa los resultados de una consulta SQL (se hace en caso de 
--? repetir mucho una sentencia)