/*
LIMIT
Lección 9.6: https://youtu.be/OuJerKzV5T0?t=7395
Compatible con: PostgreSQL
*/

-- Obtiene las 3 primeras filas de la tabla "users"
SELECT * FROM users LIMIT 3;

-- Obtiene las 2 primeras filas de la tabla "users" con email distinto a sara@gmail.com o edad igual a 15
SELECT * FROM users WHERE NOT email = 'sara@gmail.com' OR age = 15 LIMIT 2;

--? LIMIT: se utiliza para restringir el número de filas que se devuelven en el resultado de una consulta.
