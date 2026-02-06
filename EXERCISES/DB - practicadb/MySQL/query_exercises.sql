-- Q1. Mostrar todos los clientes con su nombre completo, email y teléfono.
select
	concat(nombre, ' ', apellido) as cliente,
	email as correo_electronico,
	telefono
from
	cliente;

-- Q2. Dado un id_cliente, mostrar todas sus direcciones registradas.
select
	estado,
	ciudad,
	calle,
	numero,
	codigo_postal
from
	direccion
where
	id_cliente = :id_cliente;

-- Q3. Listar todos los productos con: Nombre, Categoria, Precio, Stock Disponible
select
	p.nombre as producto,
	c.nombre as categoria,
	p.precio as precio,
	i.cantidad_disponible as stock_disponible
from
	producto p
join categoria c on
	p.id_categoria = c.id_categoria
join inventario i on
	i.id_producto = p.id_producto;

-- Q4. Dado un id_pedido, mostrar: Fecha, Cliente, Dirección de entrega, Productos, Cantidad, Precio unitario, Subtotal por producto.
select
	p.fecha, 
		CONCAT(c.nombre, ' ', c.apellido) as cliente, 
		CONCAT(d.estado, ' ', 
			d.ciudad, ' ', 
			d.calle, ' ', 
			d.numero, ' ', 
			d.codigo_postal) as direccion, 
		pd.nombre, 
		dp.cantidad, 
		dp.precio_unitario, 
		(dp.precio_unitario * dp.cantidad ) as subtotal
from
	detallepedido dp
join producto pd on
	dp.id_producto = pd.id_producto
join pedido p on
	p.id_pedido = dp.id_pedido
join direccion d on
	d.id_direccion = p.id_direccion
join cliente c on
	c.id_cliente = p.id_cliente
where
	p.id_pedido = :id_pedido;

-- Q5. Calcular el total a pagar de un pedido específico.
select
	d.id_pedido,
	(d.precio_unitario * d.cantidad) as total_pedido
from
	detallepedido d
where
	d.id_pedido = :id_pedido;

-- Q6. Listar todos los pedidos de un cliente, ordenados por fecha.
select
	id_pedido,
	fecha,
	estatus
from
	pedido
where
	id_cliente = :id_cliente
order by
	fecha desc;

-- Q7. Obtener todos los pedidos con estatus 'EN_PROCESO'.
select
	id_pedido,
	fecha,
	id_cliente
from
	pedido
where
	estatus = 'Pendiente';

-- Q8. Listar productos cuyo stock disponible sea 0 o menor.
select
	p.nombre,
	i.cantidad_disponible
from
	producto p
join inventario i on
	p.id_producto = i.id_producto
where
	i.cantidad_disponible <= 0;

-- Q9. Mostrar cuántas unidades se han vendido por producto.
select
	p.id_producto,
	p.nombre,
	SUM(dp.cantidad) as unidades_vendidas
from
	producto p
join detallepedido dp on
	p.id_producto = dp.id_producto
join pedido pd on
	dp.id_pedido = pd.id_pedido
where
	pd.estatus in ('Confirmado', 'Entregado')
group by
	p.nombre,
	p.id_producto ;

-- Q10. Top 5 productos más vendidos (por cantidad).
select
	p.id_producto ,
	p.nombre,
	SUM(dp.cantidad) as cantidad_vendida
from
	producto p
join detallepedido dp on
	p.id_producto = dp.id_producto
join pedido pd on
	dp.id_pedido = pd.id_pedido
where
	pd.estatus = 'Entregado'
group by
	p.nombre,
	p.id_producto
order by
	cantidad_vendida desc
limit 5;

-- Q11. Total vendido por categoría (importe total).
select
	cat.nombre as categoria,
	sum(dp.precio_unitario * dp.cantidad) as total_vendido
from
	categoria cat
join producto p on
	cat.id_categoria = p.id_categoria
join detallepedido dp on
	p.id_producto = dp.id_producto
join pedido pd on
	pd.id_pedido = dp.id_pedido
where
	pd.estatus in ('Confirmado', 'Entregado')
group by
	categoria;

-- Q12. Clientes ordenados por número de pedidos realizados.
select
	c.id_cliente,
	c.nombre as cliente,
	count(p.id_pedido) as pedidos_realizados
from
	cliente c
join pedido p on
	c.id_cliente = p.id_cliente
group by
	cliente,
	c.id_cliente
order by
	pedidos_realizados desc;

-- Q13. Total de ingresos por día o por mes.
select
	sum((dp.cantidad * dp.precio_unitario)) as ingreso_dia,
	date(p.fecha) as dia
from
	detallepedido dp
join pedido p on
	dp.id_pedido = p.id_pedido
where p.estatus = 'Confirmado'
group by
	date(p.fecha)
order by
	dia desc;

-- Q14. Detectar pedidos que no tengan productos asociados.
select
	distinct pd.id_pedido
from
	pedido pd
join detallepedido dp on
	pd.id_pedido = dp.id_pedido
where dp.id_producto = :id_producto;

-- Q15. Calcular el promedio de gasto por cliente.
select 
	c.id_cliente, 
	CONCAT(c.nombre, ' ', c.apellido) as cliente,
	sum(dp.precio_unitario * dp.cantidad) as gasto
from
	cliente c
join pedido p on
	p.id_cliente = c.id_cliente
join detallepedido dp on
	p.id_pedido = dp.id_pedido
where
	p.estatus = 'Confirmado'
group by
	c.id_cliente,
	c.nombre,
	c.apellido;
	
-- Q16. Productos que existen en el catálogo pero nunca se han vendido.
select 
	p.id_producto, 
	p.nombre
from producto p
left join detallepedido dp on
	p.id_producto = dp.id_producto
where dp.id_producto is null;

select * from pedido
select * from detallepedido
select * from cliente
select * from direccion
select * from producto
select * from inventario
select * from categoria