/*
OFFSET con ROWS (SQL estándar)
Compatible con: PostgreSQL 13+
*/

-- La siguiente consulta selecciona el nombre de los clientes y los ordena por edad, pero se salta las primeras 10 filas.
-- Forma SQL estándar (PostgreSQL 13 y superior):
SELECT name
FROM customers
ORDER BY age
OFFSET 10 ROWS;

-- Forma tradicional de PostgreSQL:
SELECT name
FROM customers
ORDER BY age
OFFSET 10;

--? OFFSET en PostgreSQL: Se refiere a la cantidad de filas que se saltan antes de comenzar a devolver resultados en una consulta.
--? Sintaxis: OFFSET number o OFFSET number ROWS (ambas válidas en PostgreSQL 13+)
