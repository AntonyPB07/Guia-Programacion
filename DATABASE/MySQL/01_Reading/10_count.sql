/*
COUNT
Lección 10.4: https://youtu.be/OuJerKzV5T0?t=8043
Compatible con: MySQL
*/

-- Cuenta cuantas filas contiene la tabla "users"
SELECT COUNT(*) FROM users;

-- Cuenta cuantas filas contienen un dato no nulo en el campo edad de la tabla "users"
SELECT COUNT(age) FROM users;

--? COUNT: se utiliza para contar el número de filas en un conjunto de resultados que cumplen ciertas condiciones.
