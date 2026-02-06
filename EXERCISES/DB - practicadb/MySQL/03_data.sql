-- ===================================================================
-- 03_data.sql
-- Inserción de datos de prueba
-- Este archivo se ejecuta después de 01_schema.sql y 02_constraints.sql
-- ===================================================================

USE practicadb;

-- ===================================================================
-- Datos: Categorías
-- ===================================================================
INSERT INTO Categoria (nombre, descripcion) VALUES 
    ('Electrónica', 'Productos electrónicos'),
    ('Artesanal', 'Productos artesanales'),
    ('Computo', 'Equipos de computo'),
    ('Ropa', 'Prendas de vestir'),
    ('Juguete', 'Juguetes para niños');

-- ===================================================================
-- Datos: Productos
-- ===================================================================
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES 
    (1, 'Playstation 5', 9500.00, 'Consola de videojuegos'),
    (1, 'Xbox X', 8500.00, 'Consola de videojuegos'),
    (2, 'Bolsa de mano', 350.00, 'Bolsa elaborada a mano'),
    (3, 'Macbook M4 PRO', 27999.00, 'Computadora marca Apple'),
    (4, 'Tenis Nike', 2500.00, 'Tenis Nike Edicion Star Wars'),
    (5, 'Carro a control remoto', 1999.00, 'Carro a control remoto');

-- ===================================================================
-- Datos: Inventario
-- ===================================================================
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES 
    (1, 12),
    (2, 27),
    (4, 8),
    (5, 50),
    (6, 16);

-- ===================================================================
-- Datos: Clientes
-- ===================================================================
INSERT INTO Cliente (nombre, apellido, email, telefono) VALUES 
    ('Antonio', 'Pérez', 'antonio@gmail.com', '5540241144'),
    ('Alejandro', 'Becerra', 'alex@gmail.com', '5540243366'),
    ('Mariana', 'Bahena', 'mariana@gmail.com', '5540248844'),
    ('Norma', 'Escamilla', 'norma@gmail.com', '5540244613'),
    ('Luis', 'Pérez Becerra', 'luis@gmail.com', '5540241145');

-- ===================================================================
-- Datos: Direcciones
-- ===================================================================
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VALUES 
    (1, 'México', 'Adolfo López Mateos', 'Azucena', '79', '52926'),
    (2, 'Morelos', 'Cuernavaca', 'Morelia', '21', '52932'),
    (3, 'Guadalajara', 'Zapopan', 'Jalisco', '32', '52954'),
    (4, 'Guerrero', 'Acapulco', 'Marea', '134', '52953'),
    (1, 'Quintana Roo', 'Cancun', 'XCaret', '69', '24518');

-- ===================================================================
-- Datos: Pedidos
-- ===================================================================
INSERT INTO Pedido (id_cliente, id_direccion, fecha, estatus) VALUES 
    (1, 1, '2024-01-15 10:30:00', 'Entregado'),
    (2, 2, '2024-01-20 14:45:00', 'Enviado'),
    (3, 3, '2024-01-25 09:15:00', 'Confirmado'),
    (4, 4, '2024-02-01 11:20:00', 'Pendiente'),
    (1, 5, '2024-02-05 16:00:00', 'Pendiente');

-- ===================================================================
-- Datos: Detalles de Pedidos
-- ===================================================================
INSERT INTO DetallePedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES 
    (1, 1, 3, 9500.00),
    (1, 2, 12, 1999.00),
    (2, 4, 5, 350.00),
    (3, 5, 21, 27999.00),
    (4, 6, 10, 2500.00),
    (4, 2, 11, 1999.00),
    (5, 4, 2, 350.00),
    (5, 5, 1, 27999.00);
