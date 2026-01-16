/*
LIKE
Lección 9.4: https://youtu.be/OuJerKzV5T0?t=6894
Compatible con: PostgreSQL
*/

-- Obtiene todos datos de la tabla "users" que contienen un email con el texto "gmail.com" en su parte final
SELECT * FROM users WHERE email LIKE '%gmail.com';

-- Obtiene todos datos de la tabla "users" que contienen un email con el texto "sara" en su parte inicial
SELECT * FROM users WHERE email LIKE 'sara%';

-- Obtiene todos datos de la tabla "users" que contienen un email una arroba
SELECT * FROM users WHERE email LIKE '%@%';

-- Variante case-insensitive en PostgreSQL
SELECT * FROM users WHERE email ILIKE '%GMAIL.COM';

--? LIKE: sirve para comparar resultados y recuperar las filas o datos que contengas ciertos caracteres o secuencias de caracteres.
--? En PostgreSQL, los comodines soportados son:
--?   % - cero o más caracteres
--?   _ - un solo carácter
--? ILIKE: versión case-insensitive de LIKE en PostgreSQL
