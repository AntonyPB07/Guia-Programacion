use practicadb;
create table Cliente (
	id_cliente INT AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    apellido VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL,
    telefono VARCHAR (15),
    PRIMARY KEY (id_cliente),
    UNIQUE (email, telefono)
) ENGINE=InnoDB;

create table Direccion (
	id_direccion INT AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    estado VARCHAR (100) NOT NULL,
    ciudad VARCHAR (100) NOT NULL,
    calle VARCHAR (100) NOT NULL,
    numero VARCHAR (20) NOT NULL,
    PRIMARY KEY (id_direccion),
    FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente)
) ENGINE=InnoDB;

create table Categoria (
	id_categoria INT AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_categoria)
) ENGINE=InnoDB;

create table Producto (
	id_producto INT AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    precio DECIMAL (10,2) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria)
) ENGINE=InnoDB;

create table Inventario (
	id_producto INT,
    cantidad_disponible INT NOT NULL CHECK (cantidad_disponible >= 0),
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_producto) REFERENCES Producto (id_producto)
) ENGINE=InnoDB;

create table Pedido (
	id_pedido INT AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_direccion INT NOT NULL,
    fecha DATETIME NOT NULL,
    estatus VARCHAR (20) NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente),
    FOREIGN KEY (id_direccion) REFERENCES Direccion (id_direccion)
) ENGINE=InnoDB;

create table DetallePedido (
	id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido (id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Producto (id_producto)
) ENGINE=InnoDB;

ALTER TABLE direccion ADD codigo_postal VARCHAR (10) NOT NULL;

ALTER TABLE Categoria ADD CONSTRAINT categoria_nombre UNIQUE (nombre);

ALTER TABLE Pedido MODIFY COLUMN estatus ENUM("Pendiente", "Cancelado", "Enviado", "Entregado", "Confirmado") NOT NULL DEFAULT "Pendiente";

ALTER TABLE Pedido MODIFY COLUMN fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;