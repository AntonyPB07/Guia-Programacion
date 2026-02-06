create index idx_pedido_cliente_fecha
on
pedido (id_cliente,
fecha desc);

create index idx_pedido_estatus
on
pedido (estatus);

create index idx_detallepedido_pedido
on detallepedido (id_pedido);

CREATE INDEX idx_detallepedido_producto
ON detallepedido (id_producto);

-- Producto
CREATE INDEX idx_producto_categoria
ON producto (id_categoria);

-- Inventario
CREATE INDEX idx_inventario_producto
ON inventario (id_producto);


explain analyze
select
	id_pedido,
	fecha
from
	pedido
where
	id_cliente = 1
order by fecha desc;

analyze
