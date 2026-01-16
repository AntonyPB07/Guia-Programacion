/*
BACKUP en PostgreSQL
Compatible con: PostgreSQL (usando herramientas externas)
*/

--? PostgreSQL no tiene una instrucción BACKUP nativa dentro de SQL
--? En su lugar, se usan herramientas como pg_dump

-- OPCIÓN 1: Usando pg_dump desde línea de comandos (no es SQL)
-- pg_dump -U usuario -d nombre_base_datos > backup.sql

-- OPCIÓN 2: Hacer backup en formato custom (más comprimido)
-- pg_dump -U usuario -d nombre_base_datos -Fc > backup.dump

-- OPCIÓN 3: Hacer backup de una tabla específica
-- pg_dump -U usuario -d nombre_base_datos -t nombre_tabla > backup_tabla.sql

-- OPCIÓN 4: Backup de todas las bases de datos
-- pg_dumpall -U usuario > backup_completo.sql

-- OPCIÓN 5: Usar psql para exportar datos
-- psql -U usuario -d nombre_base_datos -c "COPY tabla TO '/ruta/archivo.csv' WITH CSV;"

--? BACKUP: en PostgreSQL se realiza usando pg_dump o pg_dumpall desde línea de comandos.
--? Para restaurar: psql -U usuario -d nombre_base_datos < backup.sql
--? O para formato custom: pg_restore -U usuario -d nombre_base_datos backup.dump
