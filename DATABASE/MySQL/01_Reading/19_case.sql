/*
CASE
Lección 10.13: https://youtu.be/OuJerKzV5T0?t=9486
Compatible con: MySQL
*/

-- Obtiene todos los datos de la tabla "users" y establece condiciones de visualización de cadenas de texto según el valor de la edad
SELECT *,
CASE 
	WHEN age > 18 THEN 'Es mayor de edad'
    WHEN age = 18 THEN 'Acaba de cumplir la mayoría de edad'
    ELSE 'Es menor de edad'
END AS 'Is_Adult'
FROM users;

-- Obtiene todos los datos de la tabla "users" y establece condiciones de visualización de valores booleanos según el valor de la edad
SELECT *,
CASE 
	WHEN age > 17 THEN TRUE
    ELSE FALSE
END AS 'Is_Adult'
FROM users;

--? CASE: es una estructura de control condicional que te permite realizar evaluaciones condicionales en tus consultas
--? y devolver diferentes resultados según la evaluación de esas condiciones.
