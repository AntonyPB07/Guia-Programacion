/*
FETCH (SQL estándar)
Compatible con: PostgreSQL 13+
*/

-- La siguiente consulta selecciona el nombre de los clientes y los ordena por edad,
-- se salta las primeras 10 filas y devuelve las siguientes 10 filas.

-- Sintaxis SQL estándar (PostgreSQL 13+):
SELECT name
FROM customers
ORDER BY age
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY;

-- Sintaxis PostgreSQL tradicional (equivalente):
SELECT name
FROM customers
ORDER BY age
LIMIT 10 OFFSET 10;

--? FETCH: especifica el número de filas a devolver después de que se haya procesado la cláusula OFFSET.
--? La cláusula OFFSET es obligatoria, mientras que la cláusula FETCH es opcional.
--? En PostgreSQL, se puede usar LIMIT en su lugar de FETCH NEXT ... ROWS ONLY (más eficiente).
