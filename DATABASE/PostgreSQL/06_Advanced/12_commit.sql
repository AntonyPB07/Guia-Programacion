/*
COMMIT
Compatible con: PostgreSQL
*/

-- El registro de Ana se guardará de manera definitiva.
BEGIN;
INSERT INTO empleados (id, nombre) VALUES (4, 'Ana');
COMMIT;

--? COMMIT: guarda permanentemente los cambios realizados en la transacción actual.
