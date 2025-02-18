# *** FUNCIONES ORDEN SUPERIOR ***
from functools import reduce
# Funciones de orden superior: Son aquellas funciones que pueden aceptar otras funciones como argumentos o devolver otras funciones como resultado.
'''
* Una función puede tomar una o más funciones como parámetros
* Una función puede ser devuelta como resultado de otra función
* Una función puede ser modificada
* Se puede asignar una función a una variable
'''

# Función como parámetro
def sum_numbers(nums):
    return sum(nums)
def higher_order_function(f, lst):  # function as a parameter
    summation = f(lst)
    return summation
result = higher_order_function(sum_numbers, [1, 2, 3, 4, 5])
print(result)

# Función como valor devuelto
def square(x):
    return x ** 2
def cube(x):
    return x ** 3
def absolute(x):
    if x >= 0:
        return x
    else:
        return -(x)
def higher_order_function(type):
    if type == 'square':
        return square
    elif type == 'cube':
        return cube
    elif type == 'absolute':
        return absolute
result = higher_order_function('square')
print(result(3))
result = higher_order_function('cube')
print(result(3))
result = higher_order_function('absolute')
print(result(-3))

# Closures ---> permite que una función anidada acceda al ámbito exterior de la función envolvente.
def exterior(x):
    def interior(y):
        return x + y
    return interior
suma_5 = exterior(5)
resultado = suma_5(3)
print(resultado)

# Decorators ---> es un patrón de diseño en Python que permite a un usuario agregar nueva funcionalidad a un objeto existente sin modificar su estructura.
def decorador(func):
    def wrapper(*args, **kwargs):
        print("Antes de llamar a la función")
        resultado = func(*args, **kwargs)
        print("Después de llamar a la función")
        return resultado
    return wrapper
@decorador
def funcion_a_decorar():
    print("Dentro de la función a decorar")

funcion_a_decorar()

# *** FUNCIONES DE ORDEN SUPERIOR INCORPORADAS ***
numbers = [2, 5, 10, 21, 3, 30]
# map ---> aplica una función a cada elemento de un iterable (como una lista) y devuelve un iterable con los resultados.
def multiply_two(number):
    return number * 2
print(list(map(multiply_two, numbers)))
print(list(map(lambda number: number * 2, numbers)))

# filter --->  filtra elementos de un iterable (como una lista) basado en una función de filtro que devuelve True o False.
def filter_greater_than_ten(number):
    if number > 10:
        return True
    return False
print(list(filter(filter_greater_than_ten, numbers)))
print(list(filter(lambda number: number > 10, numbers)))

# reduce ---> reduce una secuencia a un solo valor aplicando repetidamente una función binaria a los elementos. Se usa comúnmente para calcular sumas o productos acumulativos.
def sum_two_values(first_value, second_value):
    return first_value + second_value
print(reduce(sum_two_values, numbers))

# sorted ---> ordena elementos de un iterable utilizando una función de clave opcional para especificar el criterio de ordenamiento.
palabras = ["python", "es", "genial"]
ordenado_por_longitud = sorted(palabras, key=lambda x: len(x))
print(ordenado_por_longitud)

# any, all ---> son funciones de orden superior que operan sobre iterables y devuelven True o False basado en condiciones aplicadas a los elementos del iterable.
numeros = [1, 3, 5, 6, 7]
hay_pares = any(map(lambda x: x % 2 == 0, numeros))
print(hay_pares)
numeros = [1, 2, -3, 4, 5]
todos_positivos = all(map(lambda x: x > 0, numeros))
print(todos_positivos)