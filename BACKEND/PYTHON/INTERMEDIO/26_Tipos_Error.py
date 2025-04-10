# *** TIPOS DE ERROR ***
'''
SyntaxError: Error de sintaxis en el código.
IndentationError: Error de indentación en el código.
NameError: Nombre no definido o variable no encontrada.
TypeError: Tipo de operación no compatible.
ValueError: Valor incorrecto para el tipo de dato.
ZeroDivisionError: Intento de división por cero.
IndexError: Índice fuera de rango.
KeyError: Clave no encontrada en un diccionario.
FileNotFoundError: Archivo no encontrado.
ImportError: Error al importar un módulo
ModuleNotFoundError: No puede encontrar el módulo que estás intentando importar en tu código
AtributeError: Intentar acceder a un atributo que no está definido en un objeto.
'''

# SyntaxError
# print "¡Hola comunidad!" # Descomentar para Error
from math import pi
import math
print("¡Hola comunidad!")

# NameError
language = "Spanish"  # Comentar para Error
print(language)

# IndexError
my_list = ["Python", "Swift", "Kotlin", "Dart", "JavaScript"]
print(my_list[0])
print(my_list[4])
print(my_list[-1])
# print(my_list[5]) # Descomentar para Error

# ModuleNotFoundError
# import maths # Descomentar para Error

# AttributeError
# print(math.PI) # Descomentar para Error
print(math.pi)

# KeyError
my_dict = {"Nombre": "Brais", "Apellido": "Moure", "Edad": 35, 1: "Python"}
print(my_dict["Edad"])
# print(my_dict["Apelido"]) # Descomentar para Error
print(my_dict["Apellido"])

# TypeError
# print(my_list["0"]) # Descomentar para Error
print(my_list[0])
print(my_list[False])

# ImportError
# from math import PI # Descomentar para Error
print(pi)

# ValueError
#my_int = int("10 Años")
my_int = int("10")  # Descomentar para Error
print(type(my_int))

# ZeroDivisionError
# print(4/0) # Descomentar para Error
print(4/2)

#! RAISE
#? La instrucción raise genera la excepción especificada denominada exc como si fuese generada de manera natural: raise exc
# raise es una palabra clave reservada

#! ASSERT
#? La instrucción assert evalúa una expresión y genera una excepción AssertionError si la expresión es falsa: assert expression[, message]