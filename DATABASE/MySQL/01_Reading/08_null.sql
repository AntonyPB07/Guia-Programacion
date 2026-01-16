/*
NULL
Lección 10.2: https://youtu.be/OuJerKzV5T0?t=7615
Compatible con: MySQL
*/

-- Obtiene todos datos de la tabla "users" con email nulo
SELECT * FROM users WHERE email IS NULL;

-- Obtiene todos datos de la tabla "users" con email no nulo
SELECT * FROM users WHERE email IS NOT NULL;

-- Obtiene todos datos de la tabla "users" con email no nulo y edad igual a 15
SELECT * FROM users WHERE email IS NOT NULL AND age = 15;

/*
IFNULL (MySQL específico)
Lección 10.14: https://youtu.be/OuJerKzV5T0?t=10023
*/

-- Obtiene el nombre, apellido y edad de la tabla "users", y si la edad es nula la muestra como 0
SELECT name, surname, IFNULL(age, 0) AS age FROM users;

--? NULL: sirve para mostrar en resultados todo aquel cuyo valor en la columna sea nulo o si no es nulo.

--? IFNULL: se utiliza para proporcionar un valor alternativo si una expresión es NULL.

/*
NULLIF
*/

-- Si bonos es 0, la función devuelve NULL en lugar de causar un error de división por cero.
SELECT salario / NULLIF(bonos, 0) AS ratio FROM empleados;

--? NULLIF: Compara dos valores y devuelve NULL si son iguales, de lo contrario devuelve el primer valor.

/*
COALESCE (Compatible con MySQL)
*/

-- Si salario es NULL, se mostrará 0 en su lugar.
SELECT nombre, COALESCE(salario, 0) AS salario FROM empleados;

--? COALESCE: Devuelve el primer valor NO nulo de una lista. Funciona en MySQL y PostgreSQL.
