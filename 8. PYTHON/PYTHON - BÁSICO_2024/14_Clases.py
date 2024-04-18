# *** CLASES ***
# Las clases se manejan con Camel Case.

# pass se usa para no definir ningun comportamiento a la clase
class ClaseNoDefinida:
    pass
print(ClaseNoDefinida)

# Crear objeto
p = ClaseNoDefinida()

# *** Clase constructor ***
class Animal:
    def __init__(self, nombre, tamaño, color):
        self.nombre = nombre
        self.tamaño = tamaño
        self.color = color

animal1 = Animal('Pájaro','Pequeño', 'Azul')
print(f'El {animal1.nombre} es de tamaño {animal1.tamaño} y es de color {animal1.color}')

# *** Métodos de objeto (default, modificar valores)***
class Persona:
    def __init__(self, nombre, edad, estatura, peso, sexo = 'Sin especificar'):
        self.nombre = nombre
        self.edad = edad
        self.estatura = estatura
        self.peso = peso
        self.sexo = sexo
        self.telephone = []
    def informacion_persona(self):
        return f'{self.nombre} tiene {self.edad} años, mide {self.estatura} y pesa {self.peso}. Es de sexo {self.sexo}'
    def agregar_telefono(self, telefono):
        self.telephone.append(telefono)


persona1 = Persona('Antonio', 24, 1.78, 80, 'Masculino')
print(persona1.informacion_persona())
persona2 = Persona('Valeria', 7, 1.42, 45, 'Femenino')
print(persona2.informacion_persona())
persona3 = Persona('Nayeli', 22, 1.58, 90)
print(persona3.informacion_persona())
persona1.agregar_telefono(5510449764)
print(persona1.telephone)

# *** HERENCIA ***
class ClasePadre:
    def __init__(self, atributo_padre):
        self.atributo_padre = atributo_padre
    def metodo_padre(self):
        print("Este es un método de la clase padre")

class ClaseHija(ClasePadre):  # Clase hija hereda de ClasePadre
    def __init__(self, atributo_padre, atributo_hijo):
        super().__init__(atributo_padre)  # Llama al constructor de la clase padre
        self.atributo_hijo = atributo_hijo
    def metodo_hijo(self):
        print("Este es un método de la clase hija")
# Ejemplo de uso
objeto_hijo = ClaseHija("valor_padre", "valor_hijo")
# Acceso a atributos y métodos heredados
print(objeto_hijo.atributo_padre)  # Salida: "valor_padre"
objeto_hijo.metodo_padre()  # Salida: "Este es un método de la clase padre"
objeto_hijo.metodo_hijo()  # Salida: "Este es un método de la clase hija"