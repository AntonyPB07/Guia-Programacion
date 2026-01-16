/*
CONSTRAINTS - Restricciones
Compatible con: PostgreSQL
*/

/*
NOT NULL - Asegura que una columna no pueda tener un valor NULL
UNIQUE - Asegura que todos los valores en una columna son diferentes
PRIMARY KEY - Una combinación de NOT NULL y UNIQUE. Identifica de manera única cada fila de una tabla
FOREIGN KEY - Previene acciones que destruirían los vínculos entre tablas
CHECK - Asegura que los valores en una columna satisfacen una condición específica
DEFAULT - Establece un valor predeterminado para una columna si no se especifica
CREATE INDEX - Se utiliza para crear y recuperar datos de la base de datos muy rápido
SERIAL - Autoincremente el valor generado automáticamente (PostgreSQL específico)
*/

--? Las restricciones SQL se utilizan para especificar reglas para datos en una tabla.
--? Garantizan la precisión e integridad de los datos dentro de la tabla.
--? En PostgreSQL, SERIAL es el equivalente a AUTO_INCREMENT de MySQL.
