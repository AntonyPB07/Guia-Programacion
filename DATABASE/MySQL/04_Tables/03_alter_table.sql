/*
ALTER TABLE
Lección 13.9: https://youtu.be/OuJerKzV5T0?t=12461
Compatible con: MySQL
*/

/*
ADD
Lección 13.10: https://youtu.be/OuJerKzV5T0?t=12578
*/

-- ADD: Añade un nuevo atributo surname a la tabla "persons8"
ALTER TABLE persons8
ADD surname VARCHAR(150);

/*
RENAME COLUMN
Lección 13.11: https://youtu.be/OuJerKzV5T0?t=12624
*/

-- RENAME COLUMN: Renombra el atributo surname a description en la tabla "persons8" (MySQL 8.0+)
ALTER TABLE persons8
RENAME COLUMN surname TO description;

-- Forma alternativa en MySQL (versiones anteriores):
-- ALTER TABLE persons8 CHANGE COLUMN surname description VARCHAR(150);

/*
MODIFY COLUMN
Lección 13.12: https://youtu.be/OuJerKzV5T0?t=12675
*/

-- MODIFY COLUMN: Modifica el tipo de dato del atributo description en la tabla "persons8"
ALTER TABLE persons8
MODIFY COLUMN description VARCHAR(250);

/*
DROP COLUMN
Lección 13.13: https://youtu.be/OuJerKzV5T0?t=12712
*/

-- DROP COLUMN: Elimina el atributo description en la tabla "persons8"
ALTER TABLE persons8
DROP COLUMN description;

--? ALTER TABLE: se utiliza para modificar la estructura de una tabla existente.
