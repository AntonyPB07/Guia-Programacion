/*
IN
Lección 10.7: https://youtu.be/OuJerKzV5T0?t=8335
*/

-- Ordena todos los datos de la tabla "users" con nombre igual a brais y sara
SELECT * FROM users WHERE name IN ('brais', 'sara')


--? IN: se utiliza para comparar un valor con una lista de valores o el resultado de una subconsulta. 
--? Se utiliza principalmente en la cláusula WHERE para filtrar filas basadas en una condición.

--! se podría interpretar como coincida
--! selecciona todo de users donde name coincida con brais y sara.