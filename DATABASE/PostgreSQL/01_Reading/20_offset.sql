/*
OFFSET con LIMIT
Compatible con: PostgreSQL
*/

-- En PostgreSQL, OFFSET se usa junto con LIMIT (o LIMIT/OFFSET en cualquier orden)
-- Selecciona 2 filas comenzando después de saltar 2 filas
SELECT city, population FROM north_american_cities
WHERE country LIKE 'United States'
ORDER BY population DESC
LIMIT 2 OFFSET 2;

-- Forma equivalente en PostgreSQL
SELECT city, population FROM north_american_cities
WHERE country LIKE 'United States'
ORDER BY population DESC
OFFSET 2 LIMIT 2;

--? OFFSET en PostgreSQL: Se refiere a la cantidad de filas que se saltan antes de comenzar a devolver resultados.
--? Sintaxis: LIMIT rows OFFSET offset O OFFSET offset LIMIT rows (ambas formas válidas)
