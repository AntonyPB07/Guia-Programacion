/*
REVOKE
Compatible con: MySQL
*/

-- Revoca el permiso de INSERT sobre la tabla empleados al usuario usuario1.
REVOKE INSERT ON empleados FROM usuario1;

-- Revoca todos los permisos sobre la base de datos midb al usuario usuario2.
REVOKE ALL ON midb.* FROM usuario2;

--? REVOKE: se usa para eliminar permisos previamente otorgados con GRANT.
