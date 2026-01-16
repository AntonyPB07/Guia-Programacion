/*
TOP equivalente en MySQL
Compatible con: MySQL
*/

--? TOP (SQL Server): se utiliza para limitar el número de filas devueltas.
--? En MySQL se utiliza LIMIT en su lugar (TOP se usa en SQL Server y MS Access)

-- Equivalente a: SELECT TOP 3 * FROM users
-- En MySQL:
SELECT * FROM users LIMIT 3;

-- Equivalente a: SELECT TOP 10 PERCENT * FROM users
-- En MySQL (necesita cálculo manual):
SELECT * FROM users LIMIT (SELECT CEIL(COUNT(*) * 0.1) FROM users);

--? LIMIT: en MySQL es la forma de limitar el número de filas devueltas por una consulta.
