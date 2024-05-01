# *** FUNCIONES ***

# *** Estructura de una función ***
def nombre_funcion(parámetros):
    """
    Documentación de la función

    Bloque de código que se ejecuta cuando se llama a la función
    """
    # Instrucciones de la función
    #return valor_de_retorno

def suma(num1, num2):
    res = num1 + num2
    return res

res_suma = suma(24, 45)
print(res_suma)

# Funciones  que llevan argumentos con clave y valor
def print_fullname(firstname, lastname):
    space = ' '
    full_name = firstname  + space + lastname
    print(full_name)
print(print_fullname(firstname = 'Asabeneh', lastname = 'Yetayeh'))

def add_two_numbers (num1, num2):
    total = num1 + num2
    print(total)
print(add_two_numbers(num2 = 3, num1 = 2)) # Order does not matter

# Funciones con parametros por Default
def programador(nombre, edad, lenguajes = 'none'):
    datos_programador = 'Tu nombre es: ' + nombre + ' , tu edad es: ' + str(edad) + ' y los lenguajes que sabes son: ' +lenguajes
    return datos_programador
print(programador('Antonio','24'))

# Número arbitrario de argumentos
def sum_all_nums(*nums):
    total = 0
    for num in nums:
        total += num
    return total
print(sum_all_nums(2, 3, 5))

# Función con parámetros de otra función
def square_number (n):
    return n * n
def do_something(f, x):
    return f(x)
print(do_something(square_number, 3)) # 27

# kwargs ---> se utiliza en la definición de funciones para aceptar un número variable de argumentos de palabras clave (key-word arguments).
def ejemplo_funcion(**kwargs):
    for clave, valor in kwargs.items():
        print(f"Clave: {clave}, Valor: {valor}")
ejemplo_funcion(a=1, b=2, c=3)

# *** RECURSIVIDAD ***
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)
resultado = factorial(5)
print("Factorial de 5:", resultado)