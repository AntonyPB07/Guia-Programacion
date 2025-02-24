/*
REVOKE
*/

-- Revoca el permiso de INSERT sobre la tabla empleados al usuario usuario1.
REVOKE INSERT ON empleados FROM usuario1;

--? REVOKE: se usa para eliminar permisos previamente otorgados con GRANT.