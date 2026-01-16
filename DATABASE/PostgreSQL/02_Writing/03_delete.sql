/*
DELETE
Lección 11.3: https://youtu.be/OuJerKzV5T0?t=10920
Compatible con: PostgreSQL
*/

-- Elimina el registro de la tabla "users" con identificador igual a 11
DELETE FROM users WHERE user_id = 11;

--? DELETE: se utiliza para eliminar registros existentes en una tabla.
--? NOTA: Es importante usar WHERE para especificar qué registros eliminar. Sin WHERE, se eliminarán todos los registros.
