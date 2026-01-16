/*
BACKUP en MySQL
Compatible con: MySQL (usando herramientas externas)
*/

--? MySQL no tiene una instrucción BACKUP nativa como SQL Server
--? En su lugar, se usan herramientas como mysqldump

-- OPCIÓN 1: Usando mysqldump desde línea de comandos (no es SQL)
-- mysqldump -u usuario -p nombre_base_datos > backup.sql

-- OPCIÓN 2: Usando SELECT INTO OUTFILE para exportar datos
-- SELECT * INTO OUTFILE '/ruta/archivo.txt' FROM tabla;

-- OPCIÓN 3: Usar mysqldump con todas las opciones
-- mysqldump -u usuario -p --all-databases > backup_completo.sql

-- OPCIÓN 4: Hacer backup de una tabla específica
-- mysqldump -u usuario -p nombre_base_datos nombre_tabla > backup_tabla.sql

--? BACKUP: en MySQL se realiza típicamente usando mysqldump o exportando datos a archivos.
--? Para restaurar: mysql -u usuario -p nombre_base_datos < backup.sql
