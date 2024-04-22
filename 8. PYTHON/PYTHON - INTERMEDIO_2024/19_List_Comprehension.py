# *** LIST COMPREHENSION ***
# Sintaxis --> [i for i in iterable if expression]
list = [i for i in range(0,50)]
list1 = [i + 1 + (i*2) for i in range(0, 25)]
print(list)
print(list1, '\n')

# Numero pares
numeros_pares = [i for i in range(21) if i % 2 == 0]
print(numeros_pares, '\n')

# Numeros al cuadrado
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # Output: [1, 4, 9, 16, 25]

# Obtener las primeras letras de cada palabra
words = ["apple", "banana", "cherry"]
first_letters = [word[0] for word in words]
print(first_letters)