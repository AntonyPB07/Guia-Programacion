/*
ROLLBACK
*/

-- El registro de Carlos no se guardará porque la transacción se deshizo.
BEGIN TRANSACTION;
INSERT INTO empleados (id, nombre) VALUES (3, 'Carlos');
ROLLBACK;

--? ROLLBACK: revierte todos los cambios realizados en la transacción actual.