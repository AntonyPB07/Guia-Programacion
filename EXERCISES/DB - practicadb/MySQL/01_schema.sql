-- ===================================================================
-- 01_schema.sql
-- Creación de base de datos y tabla principal de practicadb
-- Este archivo debe ejecutarse primero
-- ===================================================================

-- Crear base de datos si no existe
DROP DATABASE IF EXISTS practicadb;
CREATE DATABASE practicadb;
USE practicadb;

-- ===================================================================
-- Tabla: Cliente
-- Descripción: Almacena información de los clientes
-- ===================================================================
CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefono VARCHAR(15),
    PRIMARY KEY (id_cliente),
    UNIQUE KEY uk_email_telefono (email, telefono)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: Categoria
-- Descripción: Categorías de productos
-- ===================================================================
CREATE TABLE Categoria (
    id_categoria INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    PRIMARY KEY (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: Producto
-- Descripción: Catálogo de productos
-- ===================================================================
CREATE TABLE Producto (
    id_producto INT AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: Inventario
-- Descripción: Stock disponible de productos
-- ===================================================================
CREATE TABLE Inventario (
    id_producto INT NOT NULL,
    cantidad_disponible INT NOT NULL CHECK (cantidad_disponible >= 0),
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: Direccion
-- Descripción: Direcciones de envío de clientes
-- ===================================================================
CREATE TABLE Direccion (
    id_direccion INT AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    estado VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    calle VARCHAR(100) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    codigo_postal VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_direccion),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: Pedido
-- Descripción: Órdenes de compra de clientes
-- ===================================================================
CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_direccion INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estatus ENUM('Pendiente', 'Cancelado', 'Enviado', 'Entregado', 'Confirmado') NOT NULL DEFAULT 'Pendiente',
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    FOREIGN KEY (id_direccion) REFERENCES Direccion(id_direccion)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================================================
-- Tabla: DetallePedido
-- Descripción: Productos incluidos en cada pedido
-- ===================================================================
CREATE TABLE DetallePedido (
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

