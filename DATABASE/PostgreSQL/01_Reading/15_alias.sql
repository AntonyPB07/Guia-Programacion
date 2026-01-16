/*
ALIAS
Lección 10.9: https://youtu.be/OuJerKzV5T0?t=8667
Compatible con: PostgreSQL
*/

-- Establece el alias "Fecha de inicio en programación" a la columna init_date
-- En PostgreSQL se usan comillas dobles para identificadores (columnas, aliases) con espacios
SELECT name, init_date AS "Fecha de inicio en programación" FROM users WHERE name = 'Brais';

-- Variante sin espacios (más recomendado)
SELECT name, init_date AS inicio_fecha FROM users WHERE name = 'Brais';

--? ALIAS: es un nombre alternativo que puedes dar a una tabla o a una columna en una consulta.
--? En PostgreSQL, se usan comillas DOBLES ("") para identificadores con espacios, y comillas simples ('') para strings.
