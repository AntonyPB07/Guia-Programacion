select * from Cliente;
INSERT INTO Cliente (nombre, apellido, email, telefono) VAlUES ("Antonio", "Pérez", "antonio@gmail.com", "5540241144");
INSERT INTO Cliente (nombre, apellido, email, telefono) VAlUES ("Alejandro", "Becerra", "alex@gmail.com", "5540243366");
INSERT INTO Cliente (nombre, apellido, email, telefono) VAlUES ("Mariana", "Bahena", "mariana@gmail.com", "5540248844");
INSERT INTO Cliente (nombre, apellido, email, telefono) VAlUES ("Norma", "Escamilla", "norma@gmail.com", "5540244613");
INSERT INTO Cliente (nombre, apellido, email, telefono) VAlUES ("Luis", "Pérez Becerra", "luis@gmail.com", "5540241144");

select * from Direccion;
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VAlUES (1, "México", "Adolfo Lopéz Mateos", "Azucena", "79", "52926");
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VAlUES (2, "Morelos", "Cuernavaca", "Morelia", "21", "52932");
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VAlUES (3, "Guadalajara", "Zapopan", "Jalis", "32", "52954");
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VAlUES (4, "Guerrero", "Acapulco", "Marea", "134", "52953");
INSERT INTO Direccion (id_cliente, estado, ciudad, calle, numero, codigo_postal) VAlUES (1, "Quintana Roo", "Cancun", "XCaret", "69", "24518");

select * from Categoria;
INSERT INTO Categoria (nombre, descripcion) VALUES ("Electrónica", "Productos electrónicos");
INSERT INTO Categoria (nombre, descripcion) VALUES ("Artesanal", "Productos artesanales");
INSERT INTO Categoria (nombre, descripcion) VALUES ("Computo", "Equipos de computo");
INSERT INTO Categoria (nombre, descripcion) VALUES ("Ropa", "Prendas de vestir");
INSERT INTO Categoria (nombre, descripcion) VALUES ("Juguete", "Juguetes para niños");

select * from Producto;
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (1, "Playstation 5", 9500, "Consola de videojuegos");
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (1, "Xbox X", 8500, "Consola de videojuegos");
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (2, "Bolsa de mano", 350, "Bolsa elaborada a mano");
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (3, "Macbook M4 PRO", 27999, "Computadora marca Apple");
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (4, "Tenis Nike", 2500, "Tenis Nike Edicion Star Wars");
INSERT INTO Producto (id_categoria, nombre, precio, descripcion) VALUES (5, "Carro a control remoto", 1999, "Carro a control remoto");

select * from Inventario;
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES (1, 12);
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES (2, 27);
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES (4, 8);
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES (5, 50);
INSERT INTO Inventario (id_producto, cantidad_disponible) VALUES (6, 16);

select * from Pedido;
INSERT INTO Pedido (id_cliente, id_direccion) VALUES (1, 1);
INSERT INTO Pedido (id_cliente, id_direccion) VALUES (2, 2);
INSERT INTO Pedido (id_cliente, id_direccion) VALUES (3, 3);
INSERT INTO Pedido (id_cliente, id_direccion) VALUES (4, 4);
INSERT INTO Pedido (id_cliente, id_direccion) VALUES (1, 6);

select * from detallepedido;
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (2, 1, 3, 9500);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (3, 2, 12, 1999);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (4, 4, 5, 350);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (5, 5, 21, 27999);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (6, 6, 10, 2500);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (6, 2, 11, 1999);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (7, 4, 2, 350);
insert into detallepedido (id_pedido, id_producto, cantidad, precio_unitario) values (8, 5, 1, 27999);