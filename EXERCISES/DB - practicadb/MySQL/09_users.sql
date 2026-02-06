create user 'admin_db'@'%' identified by 'admin12345';
create user 'app_user'@'%' identified by 'appuser';
create user 'readonly_user'@'%' identified by 'readonly1234';

grant all privileges on practicadb.* to admin_db;
grant select, insert, update, delete on practicadb.* to app_user;
grant select on practicadb.* to readonly_user;

revoke delete, drop on practicadb.* from 'app_user'@'%';
grant delete on practicadb.* to app_user;

show grants for 'admin_db'@'%';
show grants for 'app_user'@'%';
show grants for 'readonly_user'@'%';

flush privileges;

SELECT * FROM Clientes
WHERE (SELECT SUM(Monto) FROM Pedidos WHERE Pedidos.ClienteID = Clientes.ID) > 1000
AND YEAR(FechaRegistro) = 2024
AND Estado = 'Activo';