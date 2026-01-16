/*
ALIAS
Lección 10.9: https://youtu.be/OuJerKzV5T0?t=8667
Compatible con: MySQL
*/

-- Establece el alias 'Fecha de inicio en programación' a la columna init_date
SELECT name, init_date AS 'Fecha de inicio en programación' FROM users WHERE name = 'Brais';

-- Consulta igual que la anterior usando comillas simples
SELECT name, init_date AS 'Fecha de inicio en programación' FROM users WHERE name = 'Brais';

--? ALIAS: es un nombre alternativo que puedes dar a una tabla o a una columna en una consulta.
--? En MySQL se pueden usar comillas simples o backticks para aliases con espacios.
