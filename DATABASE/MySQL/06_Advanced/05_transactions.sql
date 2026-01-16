/*
TRANSACTIONS
Lección 18.5: https://youtu.be/OuJerKzV5T0?t=20501
Compatible con: MySQL
*/

-- Inicia una nueva transacción. Desde este punto, todas las modificaciones realizadas en la
-- base de datos son temporales y solo son visibles dentro de esta transacción
START TRANSACTION;

-- Finaliza una transacción con éxito. Cuando se ejecuta, todos los cambios realizados en la
-- base de datos durante la transacción actual se hacen permanentes y visibles
COMMIT;

-- Deshace las operaciones realizadas en una transacción, revirtiendo la base de datos
-- al estado en que se encontraba antes de iniciar la transacción
ROLLBACK;

--! EJEMPLO DE UNA TRANSACTION
START TRANSACTION;

-- Operaciones dentro de la transacción
INSERT INTO tabla1 (columna1) VALUES ('valor1');
UPDATE tabla2 SET columna2 = 'nuevo_valor' WHERE condicion;

-- Confirmación de la transacción
COMMIT;

-- En caso de error, se puede revertir:
-- ROLLBACK;

--? TRANSACTIONS: son una serie de operaciones que se ejecutan como una unidad atómica.
--? O se ejecutan todas las operaciones o ninguna (si hay error).
