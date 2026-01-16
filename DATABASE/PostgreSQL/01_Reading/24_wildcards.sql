/*
COMODINES (WILDCARDS) en PostgreSQL
Compatible con: PostgreSQL
*/

-- Un carácter comodín en SQL se utiliza con la cláusula LIKE para reemplazar uno o varios caracteres en una cadena.

-- COMODINES SOPORTADOS EN POSTGRESQL:
--    % - cero o más caracteres
--    _ - un solo carácter

-- EJEMPLOS CON LIKE (case-sensitive):

-- Selecciona todos los empleados cuyo nombre empieza con "J", sin importar qué otros caracteres sigan.
SELECT * FROM empleados WHERE nombre LIKE 'J%';

-- Selecciona nombres de empleados donde el primer carácter sea "A", el tercero sea "a"
-- y haya un solo carácter entre ellos (como "Ana" o "Ama").
SELECT * FROM empleados WHERE nombre LIKE 'A_a';

-- Selecciona todos los empleados cuyo nombre contiene "juan" en cualquier posición (case-sensitive).
SELECT * FROM empleados WHERE nombre LIKE '%juan%';

-- EJEMPLOS CON ILIKE (case-insensitive - PostgreSQL específico):

-- Selecciona sin importar mayúsculas o minúsculas
SELECT * FROM empleados WHERE nombre ILIKE '%JUAN%';

--? En PostgreSQL, están disponibles los comodines % y _
--? ILIKE es una extensión de PostgreSQL para búsquedas case-insensitive
--? Para expresiones regulares más complejas, usar SIMILAR TO o ~
