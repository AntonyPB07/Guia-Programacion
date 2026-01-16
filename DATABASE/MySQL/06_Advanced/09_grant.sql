/*
GRANT
Compatible con: MySQL
*/

-- Otorga permisos de SELECT e INSERT sobre la tabla empleados al usuario usuario1.
GRANT SELECT, INSERT ON empleados TO usuario1;

-- Otorga todos los permisos sobre la base de datos midb al usuario usuario2.
GRANT ALL ON midb.* TO usuario2;

--? GRANT: se usa para otorgar permisos a usuarios o roles sobre bases de datos y objetos.
