-- ===================================================================
-- SETUP.sql
-- Script de instalación completa de la base de datos
-- Ejecute este archivo para instalar toda la estructura y datos
-- ===================================================================

-- Paso 1: Crear estructura de base de datos y tablas
SOURCE 01_schema.sql;

-- Paso 2: Agregar constraints adicionales
SOURCE 02_constraints.sql;

-- Paso 3: Insertar datos iniciales
SOURCE 03_data.sql;

-- Paso 4: Crear índices para optimización
SOURCE 04_indexes.sql;

-- Paso 5: Crear vistas
SOURCE 05_views.sql;

-- Paso 6: Crear funciones y procedimientos almacenados
SOURCE 06_functions_procedures.sql;

-- Paso 7: Crear triggers
SOURCE 07_triggers.sql;

-- Instalación completada
SELECT '===========================================================' AS mensaje;
SELECT 'Instalación completada exitosamente' AS resultado;
SELECT '===========================================================' AS mensaje;
SELECT CURDATE() AS fecha_instalacion;
SELECT NOW() AS hora_instalacion;
