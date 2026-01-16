/*
TIPOS DE RELACIONES
Compatible con: MySQL
*/

/*
Relación 1:1 (uno a uno)
Lección 15.1: https://youtu.be/OuJerKzV5T0?t=13490
Relación que indica que un registro en la tabla A se relaciona 
con un sólo registro en la tabla B y viceversa.
*/

-- El campo user_id de la tabla "dni" es clave foránea de la clave primaria user_id de la tabla "users"
-- (Un usuario sólo puede tener un DNI. Un DNI sólo puede estar asociado a un usuario)
CREATE TABLE dni(
    dni_id INT AUTO_INCREMENT PRIMARY KEY,
    dni_number INT NOT NULL,
    user_id INT,
    UNIQUE(dni_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

/*
Relación 1:N (uno a muchos)
Lección 15.2: https://youtu.be/OuJerKzV5T0?t=13732
Relación que indica que un registro en la tabla A puede tener varios registros relacionados en la
tabla B, pero un registro en la tabla B se relaciona con un sólo registro en la tabla A.
*/

CREATE TABLE companies(
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- El campo company_id de la tabla "users" es clave foránea de la clave primaria company_id de la tabla "companies"
-- (Un empleado (usuario) sólo puede tener una empresa, pero una empresa puede tener muchos empleados (usuarios))
ALTER TABLE users 
ADD CONSTRAINT fk_companies
FOREIGN KEY(company_id) REFERENCES companies(company_id);

/*
Relación N:M (muchos a muchos)
Lección 15.3: https://youtu.be/OuJerKzV5T0?t=14313
Relación que indica que un un registro en la tabla A puede relacionarse
con varios registros en la tabla B y viceversa.
Requiere una tabla intermedia o de unión para establecer la relación.
*/

CREATE TABLE languages(
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- El campo user_id y language_id de la tabla intermedia "users_languages" es clave foránea de las
-- claves primarias user_id de la tabla "users" y de language_id de la tabla "languages"
-- Un usuario puede conocer muchos lenguajes. Un lenguaje puede ser conocido por muchos usuarios.
CREATE TABLE users_languages(
    users_language_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    language_id INT,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(language_id) REFERENCES languages(language_id),
    UNIQUE (user_id, language_id)
);

/*
INSERT y UPDATE para trabajar con JOIN
*/

/*
1:1
Lección 16.1: https://youtu.be/OuJerKzV5T0?t=14994
*/

-- "dni" (Relación 1:1)
INSERT INTO dni (dni_number, user_id) VALUES (11111111, 1);
INSERT INTO dni (dni_number, user_id) VALUES (22222222, 2);
INSERT INTO dni (dni_number, user_id) VALUES (33333333, 3);
INSERT INTO dni (dni_number) VALUES (44444444);

/*
1:N
Lección 16.2: https://youtu.be/OuJerKzV5T0?t=15203
*/

-- "companies" y "users"  (Relación 1:N)
INSERT INTO companies (name) VALUES ('MoureDev');
INSERT INTO companies (name) VALUES ('Apple');
INSERT INTO companies (name) VALUES ('Google');

UPDATE users SET company_id = 1 WHERE user_id = 1;
UPDATE users SET company_id = 2 WHERE user_id = 3;
UPDATE users SET company_id = 3 WHERE user_id = 4;
UPDATE users SET company_id = 1 WHERE user_id = 7;

--? RELACIONES: Permiten conectar datos entre múltiples tablas manteniendo la integridad referencial.
