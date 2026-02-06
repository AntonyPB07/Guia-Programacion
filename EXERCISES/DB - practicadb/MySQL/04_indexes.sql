-- ===================================================================
-- 04_indexes.sql
-- Índices para optimizar consultas
-- Este archivo se ejecuta después de 01_schema.sql
-- ===================================================================

USE practicadb;

-- Índices en tabla Cliente
CREATE INDEX idx_cliente_email ON Cliente(email);
CREATE INDEX idx_cliente_apellido_nombre ON Cliente(apellido, nombre);

-- Índices en tabla Producto
CREATE INDEX idx_producto_categoria ON Producto(id_categoria);
CREATE INDEX idx_producto_nombre ON Producto(nombre);
CREATE INDEX idx_producto_precio ON Producto(precio);

-- Índices en tabla Direccion
CREATE INDEX idx_direccion_cliente ON Direccion(id_cliente);
CREATE INDEX idx_direccion_ciudad_estado ON Direccion(estado, ciudad);

-- Índices en tabla Pedido
CREATE INDEX idx_pedido_cliente ON Pedido(id_cliente);
CREATE INDEX idx_pedido_direccion ON Pedido(id_direccion);
CREATE INDEX idx_pedido_fecha ON Pedido(fecha);
CREATE INDEX idx_pedido_estatus ON Pedido(estatus);

-- Índices en tabla DetallePedido
CREATE INDEX idx_detallepedido_producto ON DetallePedido(id_producto);

-- Índices en tabla Inventario
CREATE INDEX idx_inventario_cantidad ON Inventario(cantidad_disponible);
