/*
OFFSET con LIMIT
Compatible con: MySQL
*/

-- En MySQL, OFFSET se usa junto con LIMIT para saltar filas
-- Selecciona 2 filas comenzando después de saltar 2 filas
SELECT city, population FROM north_american_cities
WHERE country LIKE 'United States'
ORDER BY population DESC
LIMIT 2 OFFSET 2;

--? OFFSET en MySQL: Se usa con LIMIT para especificar cuántas filas saltar antes de devolver resultados.
--? Sintaxis: LIMIT rows OFFSET offset
