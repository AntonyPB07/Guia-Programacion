/*
SELECT INTO equivalente en MySQL
Compatible con: MySQL
*/

--? En MySQL NO se soporta directamente SELECT INTO
--? Se usa CREATE TABLE ... AS SELECT en su lugar

-- Crea la tabla empleados_activos con las columnas id y nombre, 
-- copiando solo los empleados con estado "Activo".
CREATE TABLE empleados_activos AS 
SELECT id, nombre FROM empleados WHERE estado = 'Activo';

--? CREATE TABLE ... AS SELECT: se usa para copiar datos de una tabla existente a una nueva tabla.
--? Crea la nueva tabla automáticamente sin necesidad de definir su estructura previamente.

--! La nueva tabla se crea automáticamente, por lo que no debe existir antes.
--! No copia índices, claves primarias, ni restricciones, solo los datos.
--! Si necesitas mantener la estructura exacta, usa CREATE TABLE ... LIKE seguido de INSERT INTO ... SELECT
