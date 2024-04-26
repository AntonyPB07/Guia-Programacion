# *** LAMBDAS ***
# Sintaxis ---> lambda arguments: expression
''' Es una función anónima y pequeña que puede definirse en una línea de código. Se utiliza principalmente cuando necesitas una función rápida
        para realizar una tarea específica y no es necesario definir una función completa usando def.'''

# Ejemplo 1
sumar = lambda x, y: x + y
print(sumar(5,8))

# Ejemplo 2
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
print(cuadrados)

# Ejemplo 3
def sum_three_values(value):
    return lambda first_value, second_value: first_value + second_value + value
print(sum_three_values(5)(2, 4))