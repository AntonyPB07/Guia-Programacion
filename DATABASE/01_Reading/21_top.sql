/*
TOP
*/

-- Sintaxis
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;

-- Seleccionar los primeros 3 registros de la tabla users
SELECT TOP 3 * FROM users;

--? TOP: se utiliza para limitar el número de filas devueltas por una consulta.
--? En MySQL se utiliza LIMIT en lugar de TOP (TOP se usa en SQL Server MS Access)