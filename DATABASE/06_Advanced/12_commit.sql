/*
COMMIT
*/

-- El registro de Ana se guardará de manera definitiva.
BEGIN TRANSACTION;
INSERT INTO empleados (id, nombre) VALUES (4, 'Ana');
COMMIT;

--? COMMIT: guarda permanentemente los cambios realizados en la transacción actual.