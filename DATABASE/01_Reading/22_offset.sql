/*
OFFSET
*/

-- La siguiente consulta selecciona el nombre de los clientes y los ordena por edad, pero se salta las primeras 10 filas.
SELECT name
FROM customers
ORDER BY age
OFFSET 10 ROWS;

--? OFFSET: se refiere a la cantidad de filas que se saltan antes de comenzar a devolver resultados en una consulta.