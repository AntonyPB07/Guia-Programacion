/*Relación 1:N*/
create table empresa(
	id_empresa int auto_increment primary key,
    nombre varchar(255) not null
);

create table empleados(
	id_empleado int auto_increment primary key,
    nombre varchar(50) not null,
    edad int,
    id_empresa int not null,
    foreign key(id_empresa) references empresa(id_empresa)
);


--! En la relación 1:N, solo una tabla llevará la llave foránea, y será la tabla donde sea N (muchos)--