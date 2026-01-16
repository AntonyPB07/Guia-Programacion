/*
COMODINES (WILDCARDS) en MySQL
Compatible con: MySQL
*/

-- Un carácter comodín en SQL se utiliza con la cláusula LIKE para reemplazar uno o varios caracteres en una cadena.

-- COMODINES SOPORTADOS EN MYSQL:
--    % - cero o más caracteres
--    _ - un solo carácter

-- EJEMPLOS:

-- Selecciona todos los empleados cuyo nombre empieza con "J", sin importar qué otros caracteres sigan.
SELECT * FROM empleados WHERE nombre LIKE 'J%';

-- Selecciona nombres de empleados donde el primer carácter sea "A", el tercero sea "a" 
-- y haya un solo carácter entre ellos (como "Ana" o "Ama").
SELECT * FROM empleados WHERE nombre LIKE 'A_a';

-- Selecciona todos los empleados cuyo nombre contiene "juan" en cualquier posición.
SELECT * FROM empleados WHERE nombre LIKE '%juan%';

-- Selecciona nombres que terminen en "ez"
SELECT * FROM empleados WHERE nombre LIKE '%ez';

--? En MySQL, solo están disponibles los comodines % y _
--? Para caracteres más complejos (rangos, negaciones), se debe usar expresiones regulares con REGEXP
