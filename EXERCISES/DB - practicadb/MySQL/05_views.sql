-- ===================================================================
-- 05_views.sql
-- Vistas para consultas frecuentes
-- Este archivo se ejecuta después de 01_schema.sql y 03_data.sql
-- ===================================================================

USE practicadb;

-- ===================================================================
-- Vista: v_clientes_completo
-- Descripción: Información completa de clientes con nombre completo
-- ===================================================================
CREATE OR REPLACE VIEW v_clientes_completo AS
SELECT 
    id_cliente,
    CONCAT(nombre, ' ', apellido) AS nombre_completo,
    email,
    telefono
FROM Cliente
ORDER BY apellido, nombre;

-- ===================================================================
-- Vista: v_productos_con_categoria
-- Descripción: Productos con su categoría e inventario
-- ===================================================================
CREATE OR REPLACE VIEW v_productos_con_categoria AS
SELECT 
    p.id_producto,
    p.nombre AS producto,
    c.nombre AS categoria,
    p.precio,
    COALESCE(i.cantidad_disponible, 0) AS stock_disponible,
    p.descripcion
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
LEFT JOIN Inventario i ON p.id_producto = i.id_producto
ORDER BY c.nombre, p.nombre;

-- ===================================================================
-- Vista: v_pedidos_completo
-- Descripción: Información completa de pedidos con detalles del cliente
-- ===================================================================
CREATE OR REPLACE VIEW v_pedidos_completo AS
SELECT 
    p.id_pedido,
    p.fecha,
    CONCAT(c.nombre, ' ', c.apellido) AS cliente,
    p.estatus,
    CONCAT(d.calle, ' ', d.numero, ', ', d.ciudad, ', ', d.estado) AS direccion_entrega,
    COUNT(dp.id_producto) AS total_productos,
    SUM(dp.cantidad * dp.precio_unitario) AS total_pedido
FROM Pedido p
JOIN Cliente c ON p.id_cliente = c.id_cliente
JOIN Direccion d ON p.id_direccion = d.id_direccion
LEFT JOIN DetallePedido dp ON p.id_pedido = dp.id_pedido
GROUP BY p.id_pedido, p.fecha, c.nombre, c.apellido, p.estatus, d.calle, d.numero, d.ciudad, d.estado
ORDER BY p.fecha DESC;

-- ===================================================================
-- Vista: v_detalles_pedido_expandido
-- Descripción: Detalles de pedidos con información del producto
-- ===================================================================
CREATE OR REPLACE VIEW v_detalles_pedido_expandido AS
SELECT 
    dp.id_pedido,
    dp.id_producto,
    pr.nombre AS producto,
    ca.nombre AS categoria,
    dp.cantidad,
    dp.precio_unitario,
    (dp.cantidad * dp.precio_unitario) AS subtotal
FROM DetallePedido dp
JOIN Producto pr ON dp.id_producto = pr.id_producto
JOIN Categoria ca ON pr.id_categoria = ca.id_categoria
ORDER BY dp.id_pedido, dp.id_producto;

-- ===================================================================
-- Vista: v_inventario_bajo_stock
-- Descripción: Productos con stock bajo (menos de 15 unidades)
-- ===================================================================
CREATE OR REPLACE VIEW v_inventario_bajo_stock AS
SELECT 
    p.id_producto,
    p.nombre AS producto,
    c.nombre AS categoria,
    p.precio,
    COALESCE(i.cantidad_disponible, 0) AS stock_disponible
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
LEFT JOIN Inventario i ON p.id_producto = i.id_producto
WHERE COALESCE(i.cantidad_disponible, 0) < 15
ORDER BY stock_disponible ASC;

-- ===================================================================
-- Vista: v_resumen_ventas_por_cliente
-- Descripción: Total de ventas por cliente
-- ===================================================================
CREATE OR REPLACE VIEW v_resumen_ventas_por_cliente AS
SELECT 
    c.id_cliente,
    CONCAT(c.nombre, ' ', c.apellido) AS cliente,
    COUNT(DISTINCT p.id_pedido) AS total_pedidos,
    COUNT(dp.id_producto) AS total_productos_comprados,
    ROUND(SUM(dp.cantidad * dp.precio_unitario), 2) AS total_gastado
FROM Cliente c
LEFT JOIN Pedido p ON c.id_cliente = p.id_cliente
LEFT JOIN DetallePedido dp ON p.id_pedido = dp.id_pedido
GROUP BY c.id_cliente, c.nombre, c.apellido
ORDER BY total_gastado DESC;
