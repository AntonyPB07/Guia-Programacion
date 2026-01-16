/*
SAVEPOINT
Compatible con: MySQL
*/

-- Solo se guarda la inserción de Juan, porque se deshizo hasta punto1 antes de hacer COMMIT.
START TRANSACTION;
INSERT INTO empleados (id, nombre) VALUES (1, 'Juan');
SAVEPOINT punto1;
INSERT INTO empleados (id, nombre) VALUES (2, 'María');
ROLLBACK TO punto1; -- Deshace solo la inserción de María
COMMIT;

--? SAVEPOINT: crea un punto de guardado dentro de una transacción, permitiendo deshacer solo parte de la transacción con ROLLBACK TO.
