/*
OFFSET
*/

SELECT city, population FROM north_american_cities
WHERE country LIKE "United States"
ORDER BY population DESC
LIMIT 2 OFFSET 2;

--? OFFSET: se refiere a la cantidad de filas que se saltan antes de comenzar a devolver resultados en una consulta. 