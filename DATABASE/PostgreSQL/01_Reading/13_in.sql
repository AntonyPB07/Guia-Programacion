/*
IN
Lección 10.7: https://youtu.be/OuJerKzV5T0?t=8335
Compatible con: PostgreSQL
*/

-- Selecciona todos los datos de la tabla "users" con nombre igual a brais o sara
SELECT * FROM users WHERE name IN ('brais', 'sara');

--? IN: se utiliza para comparar un valor con una lista de valores o el resultado de una subconsulta.
--? Se utiliza principalmente en la cláusula WHERE para filtrar filas basadas en una condición.

--! Se podría interpretar como "coincida"
--! Selecciona todo de users donde name coincida con brais o sara.
