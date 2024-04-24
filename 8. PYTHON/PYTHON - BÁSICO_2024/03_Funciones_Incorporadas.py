# *** FUNCIONES ***
texto = 'Python, Java, Javascript, Ruby'
numeros = (1,9,5,7,31,46,20,17,23,91,72)

# abs() ---> devuelve el valor absoluto de un número, es decir, su valor numérico sin tener en cuenta su signo.
value = -10
my_abs = abs(value)
print(my_abs)

# all() ---> toma un iterable (como una lista, tupla o cadena) y devuelve True si todos los elementos en el iterable son True (o no cero para tipos numéricos).
numeros = [1, 2, 3, 4, 5]
todos_positivos = all(numero > 0 for numero in numeros)
if todos_positivos:
  print("Todos los números son positivos")
else:
  print("No todos los números son positivos")

# any() ---> Compruebe si alguno de los elementos de una lista es verdadero.
mytuple = (0, 1, False)
x = any(mytuple)
print(x)

# ascii ---> devuelve una representación imprimible de un objeto, escapando los caracteres no ASCII utilizando la notación de escape.
x = ascii("My name is Ståle")
print(x)

# bin() ---> convierte un número entero en su representación binaria como una cadena de caracteres, precedida por '0b'.
num = 10
binary_representation = bin(num)
print(binary_representation)

# bool() ---> convierte un valor en su equivalente booleano (True o False). Los valores que se consideran False incluyen 0, None, secuencias vacías ([], '', etc.).
print(bool(0))
print(bool(1))
print(bool(['Antony']))
print(bool([]))
print(bool([1]))

# breakpoint() ---> inicia el depurador en un punto específico del código. Permitiendo inspeccionar variables y realizar seguimiento detallado del estado del programa.

# bytearray() ---> devuelve un nuevo objeto bytearray inicializado con los elementos del argumento dado. bytearray es similar a bytes, pero es mutable,
#   lo que significa que sus elementos pueden ser modificados después de la creación.
byte_array = bytearray(b'hello')
byte_array[0] = 87
print(byte_array)

# bytes() ---> devuelve un nuevo objeto de bytes que representa una secuencia inmutable de enteros en el rango 0 <= x < 256. Se usa comúnmente para representar datos binarios.
byte_string = b'hello'
print(byte_string)

# callable() ---> Compruebe si se puede llamar a una función.
def x():
  a = 5
print(callable(x))

# chr() ---> Obtenga el carácter que representa el unicode 97.
x = chr(97)
print(x)

# classmethod() ---> Transforma un método en un método de clase.
#   Un método de clase recibe la clase como primer argumento implícito, de la misma forma que un método de instancia recibe la instancia.
class MyClass:
  class_variable = "Class Variable"
  def __init__(self, instance_variable):
    self.instance_variable = instance_variable
  @classmethod
  def class_method(cls):
    # Este método tiene acceso a la clase a través de 'cls'
    print("This is a class method")
    print(f"Accessing class variable: {cls.class_variable}")
  def instance_method(self):
    # Este método se llama en una instancia de la clase
    print("This is an instance method")
    print(f"Accessing instance variable: {self.instance_variable}")
MyClass.class_method()

# compile() ---> Compila el texto como código y lo ejecuta.
x = compile('print(55)', 'test', 'eval')
exec(x)

# complex() ---> devuelve un numero complejo especificando un número real y un número imaginario.
x = complex(3, 5) # complex(num_real, num_imaginario)
print(x)

# delattr() ---> se utiliza para eliminar un atributo de un objeto.
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
persona1 = Persona("Juan", 30)
delattr(persona1, "edad")
print(persona1.nombre)
# print(persona1.edad) edad se borró

# dict() ---> Crea un diccionario que contenga información.
x = dict(name = "John", age = 36, country = "Norway")

# dir() ---> Muestra el contenido de un objeto
class Personita:
  name = "John"
  age = 36
  country = "Norway"
print(dir(Personita))

# divmod() ---> Muestra el cociente y el resto
x = divmod(20, 6)
print(x)

# enumerate() ---> se utiliza para agregar un contador a un iterable y devolverlo como un objeto enumerado.
colors = ['red', 'green', 'blue', 'yellow']
for index, color in enumerate(colors, start=1):
    print(f"Color {index}: {color}")

# eval() ---> evalúa una expresión o una cadena de código Python y devuelve el resultado de esa expresión.
resultado = eval("3 + 5 * 2")
print(resultado)
condicion = eval("10 > 5")
print(condicion)

# exec() ---> se utiliza para ejecutar bloques de código Python dinámicamente.
codigo1 = """
x = 10
y = 20
suma = x + y
print(suma)
"""
exec(codigo1)

# filter() ---> se utiliza para filtrar elementos de un iterable basándose en una función de filtro (predicado) que se aplica a cada elemento del iterable.
def es_par(numero):
  return numero % 2 == 0
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares = list(filter(es_par, numeros))
print(pares)

# float() ---> se utiliza para convertir un valor en un número de punto flotante (float).
numero_entero = 183
numero_float = float(numero_entero)
print(numero_float)

# format() ---> se utiliza para formatear un valor utilizando una cadena de formato especificada.
numero = 123.456
cadena_formateada = format(numero, ".3f")
print(cadena_formateada)

# frozenset() ---> es un tipo de datos en Python que representa un conjunto inmutable.
frutas = ['manzana', 'plátano', 'naranja']
conjunto_frutas = frozenset(frutas)
print(conjunto_frutas)

# getattr() ---> se utiliza para obtener el valor de un atributo de un objeto dado su nombre.
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
persona = Persona("Juan", 30)
nombre = getattr(persona, "nombre")
print(nombre)

# globals() ---> devuelve un diccionario que representa el espacio de nombres global actual como un diccionario.
nombre = "Juan"
edad = 25
variables_globales = globals()
print(variables_globales["nombre"])
print(variables_globales["edad"])

# hasattr() ---> se utiliza para verificar si un objeto tiene un atributo dado por su nombre.
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
persona = Persona("Ana", 40)
tiene_nombre = hasattr(persona, "nombre")
print(tiene_nombre)

# hash()
# help()
# hex()

# id()
# input()
# int()
# isinstance()
# issubclass()
# iter()

# len()
# list()
# locals()

# map()
# max()
# memoryview()
# min()

# next()

# object()
# oct()
# open()
# ord()

# pow()
# print()
# property()

# range()
# repr()
# reversed()
# round()

# set()
# setattr()
# slice()
# sorted()
# staticmethod()
# str()
# sum()
# super()

# tuple()

# type()

# vars()

# zip()