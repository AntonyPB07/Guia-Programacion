# *** PROGRAMACIÓN ORIENTADA A OBJETOS ***

#? Las clases se manejan con Camel Case.

#? Una clase es una plantilla de código que define atributos (datos) y métodos (comportamientos). A partir de ella se pueden crear objetos. 
#? Un objeto es una instancia de una clase que contiene atributos y métodos. Un atributo es una variable que pertenece a una clase, 
#? mientras que un método es una función que pertenece a una clase. Las clases pueden heredar atributos y métodos de otras clases, 
#? lo que permite la reutilización de código y la creación de jerarquías de clases.
#? Encapsulamiento consiste en ocultar o restringir el acceso directo a los atributos y métodos de una clase, con el objetivo de proteger los datos y controlar su manipulación.
#? Para acceder o modificar esos atributos se usan los métodos especiales getter y setter.
#? La herencia permite crear nuevas clases basadas en clases existentes, lo que facilita la reutilización de código y la creación de jerarquías de clases.
#? Polimorfismo permite que múltiples clases compartan métodos con el mismo nombre, pero con comportamientos diferentes.

#? pass se usa para no definir ningun comportamiento a la clase

class ClaseNoDefinida:
    pass
print(ClaseNoDefinida)

# Crear objeto
creacion_objeto = ClaseNoDefinida()

# *** Clase constructor ***
class Animal:
    def __init__(self, nombre, tamaño, color): # __init__ es el constructor de la clase y es un método especial que se ejecuta automáticamente cuando se crea un nuevo objeto de una clase.
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
print(persona1.informacion_persona()) #Ejecución del metodo de la clase
persona2 = Persona('Valeria', 7, 1.42, 45, 'Femenino')
print(persona2.informacion_persona())
persona3 = Persona('Natalia', 25, 1.70, 90)
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

# *** ENCAPSULAMIENTO
#? Usando guiones bajos
class Persona:
    def __init__(self, nombre):
        self._nombre = nombre      # Convención: "protegido"
        self.__edad = 30           # "Privado" (name mangling)

    def get_edad(self):           # Getter
        return self.__edad

    def set_edad(self, nueva_edad):  # Setter con validación
        if nueva_edad > 0:
            self.__edad = nueva_edad

#? Usando @property
class Persona:
    def __init__(self, edad):
        self.__edad = edad

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, valor):
        if valor >= 0:
            self.__edad = valor

p = Persona(25)
p.edad = 30       # setter
print(p.edad)     # getter


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