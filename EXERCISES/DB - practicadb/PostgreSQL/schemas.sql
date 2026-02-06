create table Cliente (
	id_cliente SERIAL,
    nombre VARCHAR (100) NOT NULL,
    apellido VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL,
    telefono VARCHAR (15),
    PRIMARY KEY (id_cliente),
    UNIQUE (email, telefono)
);

create table Direccion (
	id_direccion SERIAL,
    id_cliente INT NOT NULL,
    estado VARCHAR (100) NOT NULL,
    ciudad VARCHAR (100) NOT NULL,
    calle VARCHAR (100) NOT NULL,
    numero VARCHAR (20) NOT NULL,
    PRIMARY KEY (id_direccion),
    FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente)
);

create table Categoria (
	id_categoria SERIAL,
    nombre VARCHAR (100) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_categoria)
);

create table Producto (
	id_producto SERIAL,
    id_categoria INT NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    precio DECIMAL (10,2) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria)
);

create table Inventario (
	id_producto INT,
    cantidad_disponible INT NOT NULL,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_producto) REFERENCES Producto (id_producto),
	CHECK (cantidad_disponible >= 0)
);

create table Pedido (
	id_pedido SERIAL,
    id_cliente INT NOT NULL,
    id_direccion INT NOT NULL,
    fecha TIMESTAMP WITH TIME ZONE NOT NULL,
    estatus VARCHAR (20) NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente),
    FOREIGN KEY (id_direccion) REFERENCES Direccion (id_direccion)
);

create table DetallePedido (
	id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido (id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Producto (id_producto),
	CHECK (cantidad > 0)
);

ALTER TABLE Direccion ADD codigo_postal VARCHAR (10) NOT NULL;

ALTER TABLE Categoria ADD CONSTRAINT categoria_nombre UNIQUE (nombre);

ALTER TABLE Pedido ADD CONSTRAINT pedido_estatus CHECK (estatus IN('Pendiente', 'Cancelado', 'Enviado', 'Entregado', 'Confirmado'));

ALTER TABLE Pedido 
    ALTER COLUMN estatus TYPE VARCHAR(20),
    ALTER COLUMN estatus SET NOT NULL,
    ALTER COLUMN estatus SET DEFAULT 'Pendiente';

ALTER TABLE Pedido 
	alter COLUMN fecha type TIMESTAMP,
	alter column fecha set NOT NULL,
	alter column fecha set DEFAULT CURRENT_TIMESTAMP;