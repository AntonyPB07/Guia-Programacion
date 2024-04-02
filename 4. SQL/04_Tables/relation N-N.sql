/*Relación N:N*/
create table programadores(
	id_programadores int auto_increment not null,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    edad int null,
    correo varchar(255) null,
    fecha_Creada datetime default current_timestamp(),
    primary key (id_programadores),
    unique (correo),
);

create table lenguajes(
	id_lenguaje int auto_increment primary key,
    lenguaje varchar(50) not null
);

create table programadores_lenguajes( --! Esta es la tabla intermediaria--
	programadores_lenguajes_id int auto_increment primary key,
    programador_id int,
    lenguaje_id int,
    foreign key (programador_id) references programadores(id_programadores),
    foreign key (lenguaje_id) references lenguajes (id_lenguaje),
    unique (programador_id, lenguaje_id)
);


--! Cuando es de N:N, debe de existir una tabla de intermediaria para que así se haga la relación correctamente--