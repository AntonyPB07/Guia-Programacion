/*
SELECT INTO
*/

-- Crea la tabla empleados_activos con solo las columnas id y nombre, copiando solo los empleados con estado "Activo".
SELECT id, nombre INTO empleados_activos FROM empleados WHERE estado = 'Activo';

--? SELECT INTO: se usa para copiar datos de una tabla existente a una nueva tabla. Crea la nueva tabla automáticamente 
--? sin necesidad de definir su estructura previamente.

--! La nueva tabla se crea automáticamente, por lo que no debe existir antes de ejecutar SELECT INTO.
--! No funciona en todas las bases de datos; en MySQL, por ejemplo, se usa CREATE TABLE ... AS SELECT.
--! No copia índices, claves primarias, ni restricciones, solo los datos.


--! Así quedaría en Mysql
CREATE TABLE empleados_activos AS 
SELECT id, nombre FROM empleados WHERE estado = 'Activo';

-- Crea la tabla empleados_activos con solo las columnas id y nombre, copiando solo empleados activos.

