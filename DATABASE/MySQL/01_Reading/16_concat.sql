/*
CONCAT
Lección 10.10: https://youtu.be/OuJerKzV5T0?t=8826
Compatible con: MySQL
*/

-- Concatena en una sola columna los campos nombre y apellido
SELECT CONCAT('Nombre: ', name, ', Apellidos: ', surname) FROM users;

-- Concatena en una sola columna los campos nombre y apellido y le establece el alias 'Nombre completo'
SELECT CONCAT('Nombre: ', name, ', Apellidos: ', surname) AS 'Nombre completo' FROM users;

--? CONCAT: se utiliza para concatenar dos o más cadenas de texto en una sola cadena.
--? En MySQL, CONCAT() es la función más común para concatenación.
