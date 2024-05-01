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

# *** Métodos de objeto (default, modificar valores, objetos que son únicos de la clase (_curp))***
class Persona:
    def __init__(self, nombre, edad, estatura, peso, curp = 'Sin especificar', sexo = 'Sin especificar'):
        self.nombre = nombre
        self.edad = edad
        self.estatura = estatura
        self.peso = peso
        self.sexo = sexo
        self._curp = curp
        self.telephone = []
    def informacion_persona(self):
        return f'{self.nombre} tiene {self.edad} años, mide {self.estatura} y pesa {self.peso}. Es de sexo {self.sexo} y su curp es {self._curp}'
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

# *** Función ___str___ ***
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"

p1 = Person("John", 36)

print(p1)

# *** MÉTODOS GET Y SET.
class Persona:
    def __init__(self, nombre, edad):
        self._nombre = nombre
        self._edad = edad
    # Getter para obtener el nombre
    @property
    def nombre(self):
        return self._nombre
    # Setter para establecer el nombre
    @nombre.setter
    def nombre(self, nuevo_nombre):
        self._nombre = nuevo_nombre
    # Getter para obtener la edad
    @property
    def edad(self):
        return self._edad
    # Setter para establecer la edad
    @edad.setter
    def edad(self, nueva_edad):
        if nueva_edad >= 0:
            self._edad = nueva_edad
        else:
            print("La edad no puede ser negativa.")
persona = Persona("Juan", 30)
print(persona.nombre)
persona.nombre = "Carlos"
print(persona.nombre)

# *** HERENCIA ***
class ClasePadre:
    def __init__(self, atributo_padre):
        self.atributo_padre = atributo_padre
    def metodo_padre(self):
        print("Este es un método de la clase padre")

class ClaseHija(ClasePadre):
    def __init__(self, atributo_padre, atributo_hijo):
        super().__init__(atributo_padre)
        self.atributo_hijo = atributo_hijo
    def metodo_hijo(self):
        print("Este es un método de la clase hija")
# Ejemplo de uso
objeto_hijo = ClaseHija("valor_padre", "valor_hijo")
# Acceso a atributos y métodos heredados
print(objeto_hijo.atributo_padre)
objeto_hijo.metodo_padre()
objeto_hijo.metodo_hijo()

# *** POLIMORFISMO ***
class Vehicle:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Move!")

class Car(Vehicle):
  pass

class Boat(Vehicle):
  def move(self):
    print("Sail!")

class Plane(Vehicle):
  def move(self):
    print("Fly!")

car1 = Car("Ford", "Mustang") #Create a Car object
boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
plane1 = Plane("Boeing", "747") #Create a Plane object

for x in (car1, boat1, plane1):
  print(x.brand)
  print(x.model)
  x.move()