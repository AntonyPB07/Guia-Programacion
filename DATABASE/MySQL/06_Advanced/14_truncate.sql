/*
TRUNCATE
Compatible con: MySQL
*/

-- Elimina todos los registros de la tabla empleados, pero mantiene la estructura de la tabla.
TRUNCATE TABLE empleados;

--? TRUNCATE: elimina todas las filas de una tabla de manera rápida y eficiente sin generar registros de transacción 
--? para cada fila eliminada.
--? DIFERENCIA CON DELETE: TRUNCATE es más rápido, pero no se puede usar con WHERE y no genera triggers.
