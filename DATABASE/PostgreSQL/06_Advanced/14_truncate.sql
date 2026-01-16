/*
TRUNCATE
Compatible con: PostgreSQL
*/

-- Elimina todos los registros de la tabla empleados, pero mantiene la estructura de la tabla.
TRUNCATE TABLE empleados;

-- TRUNCATE con RESTART IDENTITY (reinicia la secuencia)
TRUNCATE TABLE empleados RESTART IDENTITY;

-- TRUNCATE con CASCADE (elimina también las referencias de otras tablas)
TRUNCATE TABLE empleados CASCADE;

--? TRUNCATE: elimina todas las filas de una tabla de manera rápida y eficiente sin generar registros de transacción
--? para cada fila eliminada.
--? DIFERENCIA CON DELETE: TRUNCATE es más rápido, pero no se puede usar con WHERE y no genera triggers.
--? RESTART IDENTITY: en PostgreSQL, reinicia las secuencias (equivalente a AUTO_INCREMENT en MySQL).
