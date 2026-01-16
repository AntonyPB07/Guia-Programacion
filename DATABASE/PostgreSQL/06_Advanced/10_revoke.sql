/*
REVOKE
Compatible con: PostgreSQL
*/

-- Revoca el permiso de INSERT sobre la tabla empleados al usuario usuario1.
REVOKE INSERT ON empleados FROM usuario1;

-- Revoca todos los permisos sobre la tabla empleados al usuario usuario2.
REVOKE ALL ON empleados FROM usuario2;

-- Revoca el permiso de CONNECT sobre la base de datos midb al usuario usuario3.
REVOKE CONNECT ON DATABASE midb FROM usuario3;

-- Revoca el permiso de USAGE sobre el esquema public al usuario usuario4.
REVOKE USAGE ON SCHEMA public FROM usuario4;

--? REVOKE: se usa para eliminar permisos previamente otorgados con GRANT.
