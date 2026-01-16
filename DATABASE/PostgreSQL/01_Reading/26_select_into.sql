/*
SELECT INTO
Compatible con: PostgreSQL
*/

--? PostgreSQL SOPORTA SELECT INTO de forma nativa

-- Crea la tabla empleados_activos con las columnas id y nombre,
-- copiando solo los empleados con estado "Activo".
SELECT id, nombre INTO empleados_activos FROM empleados WHERE estado = 'Activo';

--? SELECT INTO: se usa para copiar datos de una tabla existente a una nueva tabla.
--? Crea la nueva tabla automáticamente sin necesidad de definir su estructura previamente.

--! La nueva tabla se crea automáticamente, por lo que no debe existir antes de ejecutar SELECT INTO.
--! No copia índices, claves primarias, ni restricciones de la tabla original, solo los datos.
--! Si necesitas copiar la estructura completa, usar CREATE TABLE ... AS SELECT

-- Alternativa: CREATE TABLE ... AS SELECT (más moderna, equivalente a MySQL)
CREATE TABLE empleados_activos_alt AS
SELECT id, nombre FROM empleados WHERE estado = 'Activo';

--? CREATE TABLE ... AS SELECT: crea una tabla nueva copiando la estructura y datos.
--? Funciona tanto en PostgreSQL como en MySQL (en MySQL es la forma preferida).
