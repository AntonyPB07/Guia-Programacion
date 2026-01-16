/*
CONCAT / Concatenación de cadenas
Lección 10.10: https://youtu.be/OuJerKzV5T0?t=8826
Compatible con: PostgreSQL
*/

-- Forma 1: Usando el operador || (más idiomático en PostgreSQL)
SELECT 'Nombre: ' || name || ', Apellidos: ' || surname FROM users;

-- Forma 2: Usando la función concat() (compatible con MySQL también)
SELECT CONCAT('Nombre: ', name, ', Apellidos: ', surname) FROM users;

-- Forma 3: Con alias, usando ||
SELECT 'Nombre: ' || name || ', Apellidos: ' || surname AS "Nombre completo" FROM users;

--? CONCAT: se utiliza para concatenar dos o más cadenas de texto en una sola cadena.
--? En PostgreSQL, el operador || es la forma más común y eficiente para concatenación.
--? También funciona la función concat().
