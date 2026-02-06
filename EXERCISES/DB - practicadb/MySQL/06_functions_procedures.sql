-- ===================================================================
-- 06_functions_procedures.sql
-- Funciones y procedimientos almacenados
-- Este archivo se ejecuta después de 01_schema.sql y 03_data.sql
-- ===================================================================

USE practicadb;

-- ===================================================================
-- Función: calcular_total_pedido
-- Descripción: Calcula el total de un pedido
-- ===================================================================
DELIMITER //
CREATE FUNCTION calcular_total_pedido(p_id_pedido INT)
RETURNS DECIMAL(10,2)
READS SQL DATA
BEGIN
    DECLARE total DECIMAL(10,2);
    
    SELECT COALESCE(SUM(cantidad * precio_unitario), 0)
    INTO total
    FROM DetallePedido
    WHERE id_pedido = p_id_pedido;
    
    RETURN total;
END //
DELIMITER ;

-- ===================================================================
-- Función: obtener_cantidad_disponible
-- Descripción: Obtiene la cantidad disponible de un producto
-- ===================================================================
DELIMITER //
CREATE FUNCTION obtener_cantidad_disponible(p_id_producto INT)
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE cantidad INT;
    
    SELECT COALESCE(cantidad_disponible, 0)
    INTO cantidad
    FROM Inventario
    WHERE id_producto = p_id_producto;
    
    RETURN cantidad;
END //
DELIMITER ;

-- ===================================================================
-- Procedimiento: crear_pedido
-- Descripción: Crea un nuevo pedido con detalles
-- Parámetros:
--   - p_id_cliente: ID del cliente
--   - p_id_direccion: ID de la dirección de entrega
--   - p_estatus: Estado del pedido (default: 'Pendiente')
-- ===================================================================
DELIMITER //
CREATE PROCEDURE crear_pedido(
    IN p_id_cliente INT,
    IN p_id_direccion INT,
    IN p_estatus VARCHAR(20)
)
BEGIN
    DECLARE v_id_pedido INT;
    
    -- Validar que el cliente existe
    IF NOT EXISTS(SELECT 1 FROM Cliente WHERE id_cliente = p_id_cliente) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cliente no existe';
    END IF;
    
    -- Validar que la dirección existe
    IF NOT EXISTS(SELECT 1 FROM Direccion WHERE id_direccion = p_id_direccion) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Dirección no existe';
    END IF;
    
    -- Crear el pedido
    INSERT INTO Pedido (id_cliente, id_direccion, fecha, estatus)
    VALUES (p_id_cliente, p_id_direccion, NOW(), COALESCE(p_estatus, 'Pendiente'));
    
    SET v_id_pedido = LAST_INSERT_ID();
    SELECT v_id_pedido AS nuevo_id_pedido;
END //
DELIMITER ;

-- ===================================================================
-- Procedimiento: agregar_producto_pedido
-- Descripción: Agrega un producto a un pedido
-- Parámetros:
--   - p_id_pedido: ID del pedido
--   - p_id_producto: ID del producto
--   - p_cantidad: Cantidad a agregar
-- ===================================================================
DELIMITER //
CREATE PROCEDURE agregar_producto_pedido(
    IN p_id_pedido INT,
    IN p_id_producto INT,
    IN p_cantidad INT
)
BEGIN
    DECLARE v_precio_unitario DECIMAL(10,2);
    DECLARE v_cantidad_disponible INT;
    
    -- Validar que el pedido existe
    IF NOT EXISTS(SELECT 1 FROM Pedido WHERE id_pedido = p_id_pedido) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Pedido no existe';
    END IF;
    
    -- Obtener precio del producto
    SELECT precio INTO v_precio_unitario
    FROM Producto
    WHERE id_producto = p_id_producto;
    
    IF v_precio_unitario IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Producto no existe';
    END IF;
    
    -- Validar stock disponible
    SELECT obtener_cantidad_disponible(p_id_producto) INTO v_cantidad_disponible;
    
    IF v_cantidad_disponible < p_cantidad THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Stock insuficiente';
    END IF;
    
    -- Agregar producto al pedido
    INSERT INTO DetallePedido (id_pedido, id_producto, cantidad, precio_unitario)
    VALUES (p_id_pedido, p_id_producto, p_cantidad, v_precio_unitario);
END //
DELIMITER ;

-- ===================================================================
-- Procedimiento: actualizar_inventario
-- Descripción: Actualiza el inventario de un producto
-- Parámetros:
--   - p_id_producto: ID del producto
--   - p_cantidad_nueva: Nueva cantidad disponible
-- ===================================================================
DELIMITER //
CREATE PROCEDURE actualizar_inventario(
    IN p_id_producto INT,
    IN p_cantidad_nueva INT
)
BEGIN
    -- Validar que el producto existe
    IF NOT EXISTS(SELECT 1 FROM Producto WHERE id_producto = p_id_producto) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Producto no existe';
    END IF;
    
    -- Validar cantidad no negativa
    IF p_cantidad_nueva < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La cantidad no puede ser negativa';
    END IF;
    
    -- Actualizar o insertar inventario
    INSERT INTO Inventario (id_producto, cantidad_disponible)
    VALUES (p_id_producto, p_cantidad_nueva)
    ON DUPLICATE KEY UPDATE cantidad_disponible = p_cantidad_nueva;
END //
DELIMITER ;
