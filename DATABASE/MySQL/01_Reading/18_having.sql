/*
HAVING
Lección 10.12: https://youtu.be/OuJerKzV5T0?t=9265
Compatible con: MySQL
*/

-- Cuenta cuantas filas contienen un dato no nulo en el campo edad de la tabla "users" mayor que 3
SELECT COUNT(age) FROM users HAVING COUNT(age) > 3;

--? HAVING: se utiliza para filtrar grupos después de que se han aplicado las funciones de agregación.
