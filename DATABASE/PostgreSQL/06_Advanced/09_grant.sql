/*
GRANT
Compatible con: PostgreSQL
*/

-- Otorga permisos de SELECT e INSERT sobre la tabla empleados al usuario usuario1.
GRANT SELECT, INSERT ON empleados TO usuario1;

-- Otorga todos los permisos sobre la tabla empleados al usuario usuario2.
GRANT ALL ON empleados TO usuario2;

-- Otorga permisos sobre la base de datos midb al usuario usuario3.
GRANT CONNECT ON DATABASE midb TO usuario3;

-- Otorga permisos sobre el esquema public al usuario usuario4.
GRANT USAGE ON SCHEMA public TO usuario4;

--? GRANT: se usa para otorgar permisos a usuarios o roles sobre bases de datos y objetos.
