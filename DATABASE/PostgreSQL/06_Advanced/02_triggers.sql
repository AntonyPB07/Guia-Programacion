/*
TRIGGERS
Lección 18.2: https://youtu.be/OuJerKzV5T0?t=18961
Compatible con: PostgreSQL
*/

-- Crea una tabla de historial para usar en el ejemplo
CREATE TABLE email_history (
    email_history_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    email VARCHAR(100) NULL,
    UNIQUE (email_history_id)
);

-- En PostgreSQL, primero se crea una función que será ejecutada por el trigger
CREATE OR REPLACE FUNCTION fn_email_history()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.email <> NEW.email THEN
        INSERT INTO email_history (user_id, email)
        VALUES (OLD.user_id, OLD.email);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Luego se crea el trigger que ejecuta la función
CREATE TRIGGER tg_email
AFTER UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION fn_email_history();

-- Actualiza el campo "email" del usuario 1 en la tabla "users" para probar el trigger
UPDATE users SET email = 'mouredev@gmail.com' WHERE user_id = 1;

-- Elimina el trigger llamado "tg_email"
DROP TRIGGER tg_email ON users;

-- Elimina la función
DROP FUNCTION fn_email_history();

-- Para ver los triggers que tenemos
SELECT trigger_name FROM information_schema.triggers WHERE event_object_table = 'users';

--? TRIGGERS: es un disparador que permite definir acciones automáticas que se activan cuando ocurren ciertos eventos en una tabla.
--? En PostgreSQL, los triggers requieren una función que define las acciones a ejecutar.
