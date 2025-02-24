/*
FETCH
*/

-- La siguiente consulta selecciona el nombre de los clientes y los ordena por edad, pero se salta las primeras 10 filas y 
-- luego devuelve las siguientes 10 filas.
SELECT name
FROM customers
ORDER BY age
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY;

--? FETCH: especifica el número de filas a devolver después de que se haya procesado la cláusula OFFSET. 
--? La cláusula OFFSET es obligatoria, mientras que la cláusula FETCH es opcional.