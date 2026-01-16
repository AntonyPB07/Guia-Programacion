/*
ROLLBACK
Compatible con: PostgreSQL
*/

-- El registro de Carlos no se guardará porque la transacción se deshizo.
BEGIN;
INSERT INTO empleados (id, nombre) VALUES (3, 'Carlos');
ROLLBACK;

--? ROLLBACK: revierte todos los cambios realizados en la transacción actual.
