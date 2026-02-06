-- ===================================================================
-- 07_triggers.sql
-- Triggers para automatización y auditoría
-- Este archivo se ejecuta después de 01_schema.sql
-- ===================================================================

USE practicadb;

-- ===================================================================
-- Trigger: tr_pedido_before_insert
-- Descripción: Valida datos antes de insertar un pedido
-- ===================================================================
DELIMITER //
CREATE TRIGGER tr_pedido_before_insert
BEFORE INSERT ON Pedido
FOR EACH ROW
BEGIN
    -- Si fecha es NULL, usar la fecha actual
    IF NEW.fecha IS NULL THEN
        SET NEW.fecha = NOW();
    END IF;
    
    -- Si estatus es NULL, usar 'Pendiente'
    IF NEW.estatus IS NULL THEN
        SET NEW.estatus = 'Pendiente';
    END IF;
END //
DELIMITER ;

-- ===================================================================
-- Trigger: tr_detallepedido_before_insert
-- Descripción: Valida cantidad y precio antes de insertar detalle
-- ===================================================================
DELIMITER //
CREATE TRIGGER tr_detallepedido_before_insert
BEFORE INSERT ON DetallePedido
FOR EACH ROW
BEGIN
    -- Validar que la cantidad sea positiva
    IF NEW.cantidad <= 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'La cantidad debe ser mayor que cero';
    END IF;
    
    -- Validar que el precio sea positivo
    IF NEW.precio_unitario <= 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El precio unitario debe ser mayor que cero';
    END IF;
END //
DELIMITER ;

-- ===================================================================
-- Trigger: tr_inventario_after_insert
-- Descripción: Registra cuando se inserta inventario
-- Nota: En producción, se podría registrar en tabla de auditoría
-- ===================================================================
DELIMITER //
CREATE TRIGGER tr_inventario_after_insert
AFTER INSERT ON Inventario
FOR EACH ROW
BEGIN
    -- Aquí se podría agregar lógica de auditoría
    -- Por ejemplo: insertar en tabla de logs
    SELECT CONCAT('Inventario creado para producto: ', NEW.id_producto, 
                  ' con cantidad: ', NEW.cantidad_disponible) AS accion;
END //
DELIMITER ;

-- ===================================================================
-- Trigger: tr_producto_before_update
-- Descripción: Valida datos antes de actualizar producto
-- ===================================================================
DELIMITER //
CREATE TRIGGER tr_producto_before_update
BEFORE UPDATE ON Producto
FOR EACH ROW
BEGIN
    -- Validar que el precio siga siendo positivo
    IF NEW.precio <= 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El precio debe ser mayor que cero';
    END IF;
    
    -- Advertencia si el precio cambió significativamente
    IF ABS(NEW.precio - OLD.precio) / OLD.precio > 0.5 THEN
        -- Cambio de más del 50%
        SELECT CONCAT('Advertencia: Cambio de precio significativo en producto ', 
                      NEW.id_producto) AS aviso;
    END IF;
END //
DELIMITER ;

-- ===================================================================
-- Trigger: tr_cliente_before_update
-- Descripción: Valida cambios en datos del cliente
-- ===================================================================
DELIMITER //
CREATE TRIGGER tr_cliente_before_update
BEFORE UPDATE ON Cliente
FOR EACH ROW
BEGIN
    -- Validar que el email tenga formato válido
    IF NEW.email NOT LIKE '%@%.%' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El email tiene formato inválido';
    END IF;
    
    -- Validar que el teléfono tenga suficientes dígitos
    IF NEW.telefono IS NOT NULL AND LENGTH(REPLACE(NEW.telefono, ' ', '')) < 7 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El teléfono debe tener al menos 7 dígitos';
    END IF;
END //
DELIMITER ;
