/*
TOP equivalente en PostgreSQL
Compatible con: PostgreSQL
*/

--? TOP (SQL Server): se utiliza para limitar el número de filas devueltas.
--? En PostgreSQL se utiliza LIMIT en su lugar (TOP es específico de SQL Server y MS Access)

-- Equivalente a: SELECT TOP 3 * FROM users
-- En PostgreSQL:
SELECT * FROM users LIMIT 3;

-- Equivalente a: SELECT TOP 10 PERCENT * FROM users
-- En PostgreSQL (necesita cálculo manual):
SELECT * FROM users LIMIT CEIL((SELECT COUNT(*) * 0.1 FROM users)::integer);

-- Forma más elegante usando una subquery:
SELECT * FROM users LIMIT (SELECT (COUNT(*) * 0.1)::integer FROM users);

--? LIMIT: en PostgreSQL es la forma de limitar el número de filas devueltas por una consulta.
