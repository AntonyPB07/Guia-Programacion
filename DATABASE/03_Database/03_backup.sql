/*
BACKUP
*/

BACKUP DATABASE databasename
TO DISK = 'filepath';

--? BACKUP DATABASE la instrucción se utiliza en SQL Server para crear una copia de seguridad completa de una base de datos SQL existente.

/*
DIFFERENTIAL
*/

BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;

--? DIFFERENTIAL: solo realiza una copia de seguridad de las partes de la base de datos que tienen cambiado desde la última 
--? copia de seguridad completa de la base de datos.