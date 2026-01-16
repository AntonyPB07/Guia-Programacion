/*
STORED PROCEDURES / FUNCTIONS
Lección 18.4: https://youtu.be/OuJerKzV5T0?t=20033
Compatible con: PostgreSQL
*/

-- En PostgreSQL se usan funciones en lugar de procedimientos almacenados
-- Crea una función llamada "p_all_users" que obtiene todos los datos de "users"

CREATE OR REPLACE FUNCTION p_all_users()
RETURNS TABLE (
    user_id INT,
    name VARCHAR,
    age INT,
    email VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT users.user_id, users.name, users.age, users.email FROM users;
END;
$$ LANGUAGE plpgsql;

-- Invoca la función llamada "p_all_users"
SELECT * FROM p_all_users();

-- Crea una función llamada "p_age_users" parametrizada para obtener usuarios con edad variable
CREATE OR REPLACE FUNCTION p_age_users(age_param INT)
RETURNS TABLE (
    user_id INT,
    name VARCHAR,
    age INT,
    email VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT users.user_id, users.name, users.age, users.email FROM users WHERE users.age = age_param;
END;
$$ LANGUAGE plpgsql;

-- Invoca la función llamada "p_age_users" con un parámetro de valor 30
SELECT * FROM p_age_users(30);

-- Elimina la función llamada "p_age_users"
DROP FUNCTION p_age_users(INT);

--? PROCEDIMIENTOS ALMACENADOS / FUNCIONES: En PostgreSQL se usan CREATE FUNCTION en lugar de CREATE PROCEDURE.
--? Las funciones son más potentes y flexibles que los procedimientos en PostgreSQL.
