/*
NULL
Lección 10.2: https://youtu.be/OuJerKzV5T0?t=7615
Compatible con: PostgreSQL
*/

-- Obtiene todos datos de la tabla "users" con email nulo
SELECT * FROM users WHERE email IS NULL;

-- Obtiene todos datos de la tabla "users" con email no nulo
SELECT * FROM users WHERE email IS NOT NULL;

-- Obtiene todos datos de la tabla "users" con email no nulo y edad igual a 15
SELECT * FROM users WHERE email IS NOT NULL AND age = 15;

/*
COALESCE (PostgreSQL específico y universal)
*/

-- Obtiene el nombre, apellido y edad de la tabla "users", y si la edad es nula la muestra como 0
SELECT name, surname, COALESCE(age, 0) AS age FROM users;

--? NULL: sirve para mostrar en resultados todo aquel cuyo valor en la columna sea nulo o si no es nulo.

--? COALESCE: se utiliza para proporcionar un valor alternativo si una expresión es NULL.
--? Devuelve el primer valor NO nulo de una lista. Es la opción universal entre MySQL y PostgreSQL.

/*
NULLIF
*/

-- Si bonos es 0, la función devuelve NULL en lugar de causar un error de división por cero.
SELECT salario / NULLIF(bonos, 0) AS ratio FROM empleados;

--? NULLIF: Compara dos valores y devuelve NULL si son iguales, de lo contrario devuelve el primer valor.
