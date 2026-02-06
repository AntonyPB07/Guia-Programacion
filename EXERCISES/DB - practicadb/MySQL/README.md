# Guía de Base de Datos - Práctica DB

## Descripción General
Este proyecto contiene una estructura completa de base de datos MySQL para un sistema de gestión de pedidos con clientes, productos, inventario y direcciones.

## Estructura de Archivos

### Orden de Ejecución

Para instalar la base de datos desde cero, ejecute los archivos en este orden:

#### Opción 1: Ejecución automática
```bash
mysql -u usuario -p < SETUP.sql
```

#### Opción 2: Ejecución manual (en orden)
1. `01_schema.sql` - Crear estructura de tablas
2. `02_constraints.sql` - Agregar validaciones
3. `03_data.sql` - Insertar datos de prueba
4. `04_indexes.sql` - Crear índices
5. `05_views.sql` - Crear vistas
6. `06_functions_procedures.sql` - Funciones y procedimientos
7. `07_triggers.sql` - Triggers
8. `08_queries.sql` - Consultas de ejemplo

---

## Descripción de Archivos

### 1. **01_schema.sql**
**Contenido:** Creación de la estructura base de datos
- Crea base de datos `practicadb`
- Define todas las tablas con relaciones:
  - Cliente
  - Categoria
  - Producto
  - Inventario
  - Direccion
  - Pedido
  - DetallePedido

**Características:**
- Foreign Keys con acciones CASCADE y RESTRICT
- Charset UTF-8mb4
- Campos con valores por defecto
- Validaciones básicas (CHECK)

---

### 2. **02_constraints.sql**
**Contenido:** Constraints y validaciones adicionales
- Validación de formato de email
- Validación de longitud de teléfono
- Validación de precios positivos
- Validación de códigos postales

---

### 3. **03_data.sql**
**Contenido:** Datos de prueba organizados
- 5 categorías de productos
- 6 productos variados
- 5 inventarios
- 5 clientes
- 5 direcciones
- 5 pedidos con detalles

---

### 4. **04_indexes.sql**
**Contenido:** Índices para optimizar consultas
Índices creados en:
- Cliente (email, apellido+nombre)
- Producto (categoría, nombre, precio)
- Direccion (cliente, ciudad+estado)
- Pedido (cliente, dirección, fecha, estatus)
- DetallePedido (producto)
- Inventario (cantidad disponible)

---

### 5. **05_views.sql**
**Contenido:** Vistas para consultas frecuentes

#### Vistas disponibles:
- `v_clientes_completo` - Listado de clientes con nombre completo
- `v_productos_con_categoria` - Productos con categoría e inventario
- `v_pedidos_completo` - Pedidos con información completa
- `v_detalles_pedido_expandido` - Detalles de pedidos expandidos
- `v_inventario_bajo_stock` - Productos con stock bajo (< 15)
- `v_resumen_ventas_por_cliente` - Totales de ventas por cliente

**Uso:**
```sql
SELECT * FROM v_productos_con_categoria;
SELECT * FROM v_pedidos_completo;
```

---

### 6. **06_functions_procedures.sql**
**Contenido:** Funciones y procedimientos almacenados

#### Funciones:
- `calcular_total_pedido(id_pedido)` - Calcula total de un pedido
- `obtener_cantidad_disponible(id_producto)` - Obtiene stock de un producto

#### Procedimientos:
- `crear_pedido(id_cliente, id_direccion, estatus)` - Crea nuevo pedido
- `agregar_producto_pedido(id_pedido, id_producto, cantidad)` - Agrega producto a pedido
- `actualizar_inventario(id_producto, cantidad_nueva)` - Actualiza stock

**Uso:**
```sql
-- Llamar función
SELECT calcular_total_pedido(1);

-- Llamar procedimiento
CALL crear_pedido(1, 1, 'Pendiente');
CALL agregar_producto_pedido(1, 1, 5);
CALL actualizar_inventario(1, 20);
```

---

### 7. **07_triggers.sql**
**Contenido:** Triggers para automatización

#### Triggers:
- `tr_pedido_before_insert` - Valida y autocompleta datos de pedidos
- `tr_detallepedido_before_insert` - Valida cantidades y precios
- `tr_inventario_after_insert` - Registra creación de inventario
- `tr_producto_before_update` - Valida cambios de precio
- `tr_cliente_before_update` - Valida cambios en cliente

**Funcionalidades:**
- Valores por defecto automáticos
- Validaciones antes de INSERT/UPDATE
- Control de integridad de datos
- Advertencias de cambios significativos

---

### 8. **08_queries.sql**
**Contenido:** Consultas de ejemplo y ejercicios

#### Consultas disponibles:
- Q1: Clientes con nombre completo
- Q2: Direcciones de un cliente
- Q3: Productos con categoría y stock
- Q4: Detalles de un pedido
- Q5: Total a pagar de un pedido
- Q6: Pedidos de un cliente
- Q7: Pedidos pendientes
- Q8: Productos con stock bajo
- Q9: Unidades vendidas por producto
- Q10: Top 5 productos más vendidos
- Q11: Total vendido por categoría
- Q12: Clientes por número de pedidos
- Q13: Ingresos diarios
- Q14: Pedidos sin productos
- Q15: Gasto promedio por cliente
- Q16: Productos nunca vendidos

---

## Diagrama Entidad-Relación

```
Cliente (1) ──┬─→ Direccion (N)
              └─→ Pedido (N)
              
Pedido (1) ──┬─→ Direccion (N)
             └─→ DetallePedido (N)
             
Categoria (1) ─→ Producto (N) ──┬─→ Inventario (1)
                                └─→ DetallePedido (N)
```

## Relaciones

- **Cliente → Direccion**: 1 cliente puede tener N direcciones
- **Cliente → Pedido**: 1 cliente puede hacer N pedidos
- **Categoria → Producto**: 1 categoría contiene N productos
- **Producto → Inventario**: 1 producto tiene 1 inventario
- **Producto → DetallePedido**: 1 producto aparece en N detalles de pedido
- **Pedido → DetallePedido**: 1 pedido contiene N detalles

## Mejores Prácticas Implementadas

✅ **Normalización**: Base de datos en forma normal 3NF
✅ **Constraints**: Validaciones de integridad referencial
✅ **Índices**: Optimización de consultas frecuentes
✅ **Vistas**: Abstracción de consultas complejas
✅ **Procedimientos**: Lógica de negocio reutilizable
✅ **Triggers**: Automatización y auditoría
✅ **Documentación**: Comentarios en cada sección
✅ **Charset UTF-8mb4**: Soporte para caracteres especiales
✅ **Valores por defecto**: Campos con CURRENT_TIMESTAMP
✅ **Control de integridad**: CHECK, FOREIGN KEY, UNIQUE

## Variables y Parámetros

En las consultas parametrizadas, reemplace:
- `:id_cliente` por el ID real del cliente
- `:id_pedido` por el ID real del pedido
- `:id_producto` por el ID real del producto

Ejemplo:
```sql
-- En lugar de:
WHERE id_cliente = :id_cliente

-- Use:
WHERE id_cliente = 1
```

## Consultas Útiles

### Resumen de datos
```sql
SELECT 'Cliente' AS tabla, COUNT(*) AS registros FROM Cliente
UNION ALL
SELECT 'Pedido', COUNT(*) FROM Pedido;
```

### Ver vistas disponibles
```sql
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_SCHEMA = 'practicadb' AND TABLE_TYPE = 'VIEW';
```

### Ver procedimientos y funciones
```sql
SELECT ROUTINE_NAME, ROUTINE_TYPE 
FROM INFORMATION_SCHEMA.ROUTINES 
WHERE ROUTINE_SCHEMA = 'practicadb';
```

## Notas Importantes

1. **Transacciones**: Para cambios críticos, use transacciones:
   ```sql
   START TRANSACTION;
   -- Sus sentencias
   COMMIT; -- o ROLLBACK;
   ```

2. **Backups**: Realizar backups regularmente
   ```bash
   mysqldump -u usuario -p practicadb > backup.sql
   ```

3. **Validación**: Ejecutar consultas de auditoría regularmente

4. **Performance**: Los índices mejoran significativamente las consultas

## Soporte

Para más información sobre SQL y mejores prácticas, consulte:
- [MySQL Official Documentation](https://dev.mysql.com/doc/)
- [SQL Style Guide](https://www.sqlstyle.guide/)
- [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)

---

**Última actualización**: Enero 2026
**Versión**: 1.0
