# *** CONDICIONALES ***
ine = True
edad = int(input('Ingresa tu edad: '))
edad2 = int(input('Ingresa tu edad: '))

titulos = int(input('Ingresa los titulos de tu equipo'))
aficion = True

# *** if ***
if ine and edad >= 18:
    print('Tiene su ine y es mayor de 18 años')

if not ine and edad2 >= 18:
    print('No tiene su ine pero es mayor de 18 años')

# *** if else ***
if titulos > 10 and aficion:
    print('Es un equipo grande y tiene afición')
else:
    print('Es equipo chico')

# *** if elif else ***
a = 0
if a > 0:
    print('El número es positivo')
elif a < 0:
    print('El número es negativo')
else:
    print('Es cero')

# *** condiciones anidadas ***
a = 0
if a > 0:
    if a % 2 == 0:
        print('A is a positive and even integer')
    else:
        print('A is a positive number')
elif a == 0:
    print('A is zero')
else:
    print('A is a negative number')


# SHORT HAND (ATAJO) ---> código if condición else código
nombre = 'Antonio'
longitud = len(nombre)
print(f'{nombre} tiene {longitud} letras') if longitud > 5 else print('No tiene el numero de letras seleccionada')