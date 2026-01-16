/*
OFFSET con ROWS (SQL estándar)
Compatible con: MySQL 8.0+
*/

-- La siguiente consulta selecciona el nombre de los clientes y los ordena por edad, pero se salta las primeras 10 filas.
-- Nota: OFFSET ROWS es sintaxis SQL estándar. En MySQL tradicional, usar LIMIT offset,count
SELECT name
FROM customers
ORDER BY age
LIMIT 10, 18446744073709551615;

-- Forma más simple en MySQL (saltando 10 filas, sin límite superior):
SELECT name
FROM customers
ORDER BY age
LIMIT 999999 OFFSET 10;

--? OFFSET en MySQL: Se refiere a la cantidad de filas que se saltan antes de comenzar a devolver resultados en una consulta.
--? Sintaxis recomendada: LIMIT count OFFSET offset
