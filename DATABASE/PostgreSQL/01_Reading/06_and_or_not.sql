/*
NOT, AND, OR
Lección 9.5: https://youtu.be/OuJerKzV5T0?t=7194
Compatible con: PostgreSQL
*/

-- Obtiene todos datos de la tabla "users" con email distinto a sara@gmail.com
SELECT * FROM users WHERE NOT email = 'sara@gmail.com';

-- Obtiene todos datos de la tabla "users" con email distinto a sara@gmail.com y edad igual a 15
SELECT * FROM users WHERE NOT email = 'sara@gmail.com' AND age = 15;

-- Obtiene todos datos de la tabla "users" con email distinto a sara@gmail.com o edad igual a 15
SELECT * FROM users WHERE NOT email = 'sara@gmail.com' OR age = 15;

--? AND, OR, NOT: los mismos criterios que hay en la programación.
