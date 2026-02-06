-- ===================================================================
-- 02_constraints.sql
-- Constraints adicionales y validaciones
-- Este archivo se ejecuta después de 01_schema.sql
-- ===================================================================

USE practicadb;

-- Validación: Email debe ser válido (simple check)
ALTER TABLE Cliente ADD CONSTRAINT chk_email_format 
CHECK (email LIKE '%@%.%');

-- Validación: Teléfono debe tener al menos 7 dígitos
ALTER TABLE Cliente ADD CONSTRAINT chk_telefono_length 
CHECK (LENGTH(REPLACE(telefono, ' ', '')) >= 7);

-- Validación: Precio debe ser positivo
ALTER TABLE Producto ADD CONSTRAINT chk_precio_positivo 
CHECK (precio > 0);

-- Validación: Código postal debe tener contenido
ALTER TABLE Direccion ADD CONSTRAINT chk_codigo_postal_length 
CHECK (LENGTH(codigo_postal) >= 4 AND LENGTH(codigo_postal) <= 10);

-- Validación: Precio unitario debe ser positivo
ALTER TABLE DetallePedido ADD CONSTRAINT chk_precio_unitario_positivo 
CHECK (precio_unitario > 0);
