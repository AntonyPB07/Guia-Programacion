/*
EXISTS
Compatible con: PostgreSQL
*/

-- Este query selecciona todos los empleados que pertenecen al departamento "Ventas".
SELECT * FROM empleados e
WHERE EXISTS (SELECT 1 FROM departamentos d WHERE d.id = e.departamento_id AND d.nombre = 'Ventas');

--? EXISTS: se usa en consultas para verificar si una subconsulta devuelve algún resultado.
--? Si la subconsulta devuelve al menos una fila, la condición se evalúa como TRUE.
