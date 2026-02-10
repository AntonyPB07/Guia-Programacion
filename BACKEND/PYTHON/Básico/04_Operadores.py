# *** OPERADORES ARITMÉTICOS ***
print('Suma: ', 1 + 2)
print('Resta: ', 2 - 1)
print('Multiplicación: ', 2 * 3)
print('División: ', 7 / 2)                      # Devuelve el resultado en flotante.
print('División sin el resto: ', 7 // 3)        # Devuelve el resultado en número entero
print('Módulo: ', 3 % 2)
print('Exponenciación: ', 3 ** 2)

# Exercise 1: Calculating area of a circle
radius = 10                                     # radius of a circle
area_of_circle = 3.14 * radius ** 2             # two * sign means exponent or power
print('Area of a circle:', area_of_circle)

# Operaciones con cadenas de texto
print("Hola " + "Python " + "¿Qué tal?")
print("Hola " + str(5))

# Operaciones mixtas
print("Hola " * 5)
print("Hola " * (2 ** 3))

my_float = 2.5 * 2
print("Hola " * int(my_float))

# *** OPERADORES COMPARATIVOS ***
print(3 > 2)     # True
print(3 < 2)     # False
print(3 >= 2)    # True
print(2 <= 3)    # True
print(3 == 2)    # False
print(3 != 2)    # True

print(len('mango') == len('avocado'))  # False
print(len('mango') != len('avocado'))  # True
print(len('mango') < len('avocado'))   # True
print(len('milk') != len('meat'))      # False
print(len('milk') == len('meat'))      # True
print(len('tomato') == len('potato'))  # True
print(len('python') > len('dragon'))   # False

# Comparación Booleana
print('True == True: ', True == True)
print('True == False: ', True == False)
print('False == False:', False == False)
print('True and True: ', True and True)
print('True or False:', True or False)

# Another way comparison
# print('1 is 1', 1 is 1)                     True - because the data values are the same
# print('1 is not 2', 1 is not 2)             True - because 1 is not 2
print('A in Asabeneh', 'A' in 'Asabeneh')   # True - A found in the string
print('B in Asabeneh', 'B' not in 'Asabeneh')   # False -there is no uppercase B
print('coding' in 'coding for all')         # True - because coding for all has the word coding
print('a in an:', 'a' in 'an')              # True
# print('4 is 2 ** 2:', 4 is 2 ** 2)          True

print(3 > 2 and 4 > 3)          # True - because both statements are true
print(3 > 2 and 4 < 3)          # False - because the second statement is false
print(3 < 2 and 4 < 3)          # False - because both statements are false
print(3 > 2 or 4 > 3)           # True - because both statements are true
print(3 > 2 or 4 < 3)           # True - because one of the statement is true
print(3 < 2 or 4 < 3)           # False - because both statements are false
print(not 3 > 2)                # False - because 3 > 2 is true, then not True gives False
print(not True)                 # False - Negation, the not operator turns true to false
print(not False)                # True
print(not not True)             # True
print(not not False)            # False