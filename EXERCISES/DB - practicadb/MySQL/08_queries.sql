-- ===================================================================
-- 08_queries.sql
-- Consultas y ejercicios de ejemplo
-- Este archivo se ejecuta después de que todos los datos estén cargados
-- ===================================================================

USE practicadb;

-- ===================================================================
-- Q1. Mostrar todos los clientes con nombre completo, email y teléfono
-- ===================================================================
SELECT
    CONCAT(nombre, ' ', apellido) AS cliente,
    email AS correo_electronico,
    telefono
FROM Cliente
ORDER BY apellido, nombre;

-- ===================================================================
-- Q2. Dado un id_cliente, mostrar todas sus direcciones registradas
-- Nota: Cambiar :id_cliente por un valor real (ej: 1)
-- ===================================================================
SELECT
    id_direccion,
    estado,
    ciudad,
    calle,
    numero,
    codigo_postal
FROM Direccion
WHERE id_cliente = 1
ORDER BY estado, ciudad;

-- ===================================================================
-- Q3. Listar productos con categoría, precio y stock disponible
-- ===================================================================
SELECT
    p.id_producto,
    p.nombre AS producto,
    c.nombre AS categoria,
    p.precio,
    COALESCE(i.cantidad_disponible, 0) AS stock_disponible
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
LEFT JOIN Inventario i ON p.id_producto = i.id_producto
ORDER BY c.nombre, p.nombre;

-- ===================================================================
-- Q4. Detalles de un pedido específico
-- Nota: Cambiar :id_pedido por un valor real (ej: 1)
-- ===================================================================
SELECT
    p.id_pedido,
    p.fecha,
    CONCAT(c.nombre, ' ', c.apellido) AS cliente,
    CONCAT(d.calle, ' ', d.numero, ', ', d.ciudad, ', ', d.estado) AS direccion,
    pr.nombre AS producto,
    dp.cantidad,
    dp.precio_unitario,
    (dp.precio_unitario * dp.cantidad) AS subtotal
FROM DetallePedido dp
JOIN Producto pr ON dp.id_producto = pr.id_producto
JOIN Pedido p ON dp.id_pedido = p.id_pedido
JOIN Cliente c ON p.id_cliente = c.id_cliente
JOIN Direccion d ON p.id_direccion = d.id_direccion
WHERE p.id_pedido = 1
ORDER BY dp.id_producto;

-- ===================================================================
-- Q5. Calcular el total a pagar de un pedido específico
-- ===================================================================
SELECT
    p.id_pedido,
    ROUND(SUM(dp.cantidad * dp.precio_unitario), 2) AS total_pedido
FROM Pedido p
JOIN DetallePedido dp ON p.id_pedido = dp.id_pedido
WHERE p.id_pedido = 1
GROUP BY p.id_pedido;

-- ===================================================================
-- Q6. Listar todos los pedidos de un cliente ordenados por fecha
-- ===================================================================
SELECT
    id_pedido,
    fecha,
    estatus,
    (SELECT ROUND(SUM(cantidad * precio_unitario), 2) 
     FROM DetallePedido WHERE id_pedido = Pedido.id_pedido) AS total_pedido
FROM Pedido
WHERE id_cliente = 1
ORDER BY fecha DESC;

-- ===================================================================
-- Q7. Obtener todos los pedidos con estatus 'Pendiente'
-- ===================================================================
SELECT
    id_pedido,
    fecha,
    id_cliente,
    estatus
FROM Pedido
WHERE estatus = 'Pendiente'
ORDER BY fecha DESC;

-- ===================================================================
-- Q8. Listar productos con stock bajo (< 15 unidades)
-- ===================================================================
SELECT
    p.id_producto,
    p.nombre,
    c.nombre AS categoria,
    p.precio,
    COALESCE(i.cantidad_disponible, 0) AS stock_disponible
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
LEFT JOIN Inventario i ON p.id_producto = i.id_producto
WHERE COALESCE(i.cantidad_disponible, 0) < 15
ORDER BY stock_disponible ASC;

-- ===================================================================
-- Q9. Mostrar unidades vendidas por producto
-- ===================================================================
SELECT
    p.id_producto,
    p.nombre,
    SUM(dp.cantidad) AS unidades_vendidas,
    SUM(dp.cantidad * dp.precio_unitario) AS ingresos_totales
FROM Producto p
JOIN DetallePedido dp ON p.id_producto = dp.id_producto
GROUP BY p.id_producto, p.nombre
ORDER BY unidades_vendidas DESC;

-- ===================================================================
-- Q10. Top 5 productos más vendidos (por cantidad)
-- ===================================================================
SELECT
    p.id_producto,
    p.nombre,
    SUM(dp.cantidad) AS cantidad_vendida,
    ROUND(SUM(dp.cantidad * dp.precio_unitario), 2) AS ingresos
FROM Producto p
JOIN DetallePedido dp ON p.id_producto = dp.id_producto
JOIN Pedido pe ON dp.id_pedido = pe.id_pedido
GROUP BY p.id_producto, p.nombre
ORDER BY cantidad_vendida DESC
LIMIT 5;

-- ===================================================================
-- Q11. Total vendido por categoría (importe total)
-- ===================================================================
SELECT
    cat.id_categoria,
    cat.nombre AS categoria,
    COUNT(DISTINCT p.id_producto) AS total_productos,
    SUM(dp.cantidad) AS total_unidades,
    ROUND(SUM(dp.cantidad * dp.precio_unitario), 2) AS total_ingresos
FROM Categoria cat
LEFT JOIN Producto p ON cat.id_categoria = p.id_categoria
LEFT JOIN DetallePedido dp ON p.id_producto = dp.id_producto
GROUP BY cat.id_categoria, cat.nombre
ORDER BY total_ingresos DESC;

-- ===================================================================
-- Q12. Clientes ordenados por número de pedidos realizados
-- ===================================================================
SELECT
    c.id_cliente,
    CONCAT(c.nombre, ' ', c.apellido) AS cliente,
    COUNT(p.id_pedido) AS pedidos_realizados,
    ROUND(SUM(COALESCE(
        (SELECT SUM(cantidad * precio_unitario) 
         FROM DetallePedido WHERE id_pedido = p.id_pedido), 0)), 2) AS total_gastado
FROM Cliente c
LEFT JOIN Pedido p ON c.id_cliente = p.id_cliente
GROUP BY c.id_cliente, c.nombre, c.apellido
ORDER BY pedidos_realizados DESC;

-- ===================================================================
-- Q13. Ingresos diarios
-- ===================================================================
SELECT
    DATE(p.fecha) AS fecha,
    COUNT(DISTINCT p.id_pedido) AS total_pedidos,
    COUNT(DISTINCT dp.id_producto) AS total_productos,
    ROUND(SUM(dp.cantidad * dp.precio_unitario), 2) AS ingresos_dia
FROM Pedido p
LEFT JOIN DetallePedido dp ON p.id_pedido = dp.id_pedido
GROUP BY DATE(p.fecha)
ORDER BY fecha DESC;

-- ===================================================================
-- Q14. Pedidos sin productos asociados
-- ===================================================================
SELECT
    p.id_pedido,
    p.fecha,
    c.nombre,
    p.estatus
FROM Pedido p
JOIN Cliente c ON p.id_cliente = c.id_cliente
WHERE NOT EXISTS (
    SELECT 1 FROM DetallePedido WHERE id_pedido = p.id_pedido
)
ORDER BY p.fecha DESC;

-- ===================================================================
-- Q15. Promedio de gasto por cliente
-- ===================================================================
SELECT
    c.id_cliente,
    CONCAT(c.nombre, ' ', c.apellido) AS cliente,
    COUNT(DISTINCT p.id_pedido) AS cantidad_pedidos,
    ROUND(AVG(
        (SELECT SUM(cantidad * precio_unitario) 
         FROM DetallePedido WHERE id_pedido = p.id_pedido)
    ), 2) AS gasto_promedio,
    ROUND(SUM(COALESCE(
        (SELECT SUM(cantidad * precio_unitario) 
         FROM DetallePedido WHERE id_pedido = p.id_pedido), 0)), 2) AS gasto_total
FROM Cliente c
LEFT JOIN Pedido p ON c.id_cliente = p.id_cliente
GROUP BY c.id_cliente, c.nombre, c.apellido
ORDER BY gasto_total DESC;

-- ===================================================================
-- Q16. Productos nunca vendidos
-- ===================================================================
SELECT
    p.id_producto,
    p.nombre,
    c.nombre AS categoria,
    p.precio,
    COALESCE(i.cantidad_disponible, 0) AS stock_actual
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
LEFT JOIN Inventario i ON p.id_producto = i.id_producto
WHERE p.id_producto NOT IN (
    SELECT DISTINCT id_producto FROM DetallePedido
)
ORDER BY c.nombre, p.nombre;

-- ===================================================================
-- Consultas de Verificación y Auditoría
-- ===================================================================

-- Ver todas las tablas
SELECT 'Cliente' AS tabla, COUNT(*) AS registros FROM Cliente
UNION ALL
SELECT 'Categoria', COUNT(*) FROM Categoria
UNION ALL
SELECT 'Producto', COUNT(*) FROM Producto
UNION ALL
SELECT 'Inventario', COUNT(*) FROM Inventario
UNION ALL
SELECT 'Direccion', COUNT(*) FROM Direccion
UNION ALL
SELECT 'Pedido', COUNT(*) FROM Pedido
UNION ALL
SELECT 'DetallePedido', COUNT(*) FROM DetallePedido;
