//! CLASES Y OBJETOS(INSTANCIAS)
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    detallesEmpleado() {
        return `Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}
let empleado1 = new Empleado("José", 5000); //creación del objeto
empleado1.detallesEmpleado();

//! HERENCIA
class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    detallesEmpleado() { // Aquí se aplica la SOBREESCRITURA, ya que modificamos el comportamiento de obtenerDetalles, en la clase PADRE imprimia 2 cosas, ahora imprime 3
        return `Empleado. ${super.detallesEmpleado()}. Gerente${this.departamento}}`;
    }
    estudiosEmpleado() {
        return `La persona ${this.nombre} estudió Ingeniería.`;
    }
}
let gerente1 = new Gerente("Antonio", 10000, "Sistemas");
gerente1.detallesEmpleado();
gerente1.estudiosEmpleado();

//! POLIMORFISMO
function imprimir(impresion) { //aquí se aplica el POLIMORFISMO, creamos una funcion para que imprima cierta información
    console.log(impresion.obtenerDetalles());
}
imprimir(empleado1); //aquí imprime los datos de empleado1, por medio de la funcion imprimir
imprimir(gerente1); //aqui imrpime los datos de gerente1, por medio de la funcion imprimir