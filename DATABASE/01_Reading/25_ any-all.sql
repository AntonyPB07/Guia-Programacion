/*
ANY
*/

-- Selecciona empleados cuyo salario sea mayor que al menos uno de los salarios en el departamento 2.
SELECT * FROM empleados 
WHERE salario > ANY (SELECT salario FROM empleados WHERE departamento_id = 2);

--Equivalente a usar OR en una comparación múltiple.

--? ANY: devuelve TRUE si al menos uno de los valores de la subconsulta cumple la condición.
--? Se usa con operadores de comparación (=, >, <, >=, <=, !=).

/*
ALL
*/

-- Selecciona empleados cuyo salario sea mayor que todos los salarios en el departamento 2 (es decir, mayor que el salario más alto en ese departamento).
SELECT * FROM empleados 
WHERE salario > ALL (SELECT salario FROM empleados WHERE departamento_id = 2);

-- Equivalente a usar AND en una comparación múltiple.

--? ALL: devuelve TRUE si la condición se cumple para todos los valores devueltos por la subconsulta.
--? También se usa con operadores de comparación.