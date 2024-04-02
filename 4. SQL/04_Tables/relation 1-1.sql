/*Relación 1:1*/
create table equipoFutbol(
	id_equipoFutbol int auto_increment primary key,
    nombre varchar(50) not null
);

create table futbolista(
	id_futbolista int auto_increment primary key,
    nombre varchar(255) not null,
    numero int not null unique,
    id_equipoFut int,
    FOREIGN KEY (id_equipoFut) REFERENCES equipoFutbol(id_equipoFutbol)
);

insert into equipoFutbol (nombre) 
	values ('América'),
    ('Real Madrid'),
    ('Liverpool'),
    ('Milan');
    
insert into futbolista (nombre, numero, id_equipoFut) 
	values ('Henry', 24, 1),
    ('Ronaldo', 7, 4),
    ('Van', 18, 2),
    ('Pirlo', 10, 3);  

--! Cuando es relación 1:1, solo una tabla debe tener llave foránea--