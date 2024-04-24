'''def calculadora_basica(num1, num2):
    numero = {
        1:'Suma',
        2:'Resta',
        3:'Multiplicacion',
        4:'Division'
    }
    print(f'Selecciona una opción\n{numero}')
    operacion = int(input('¿Qué operación deseas realizar?\n'))
    if operacion == 1:
        return num1 + num2
    if operacion == 2:
        return num1 - num2
    if operacion == 3:
        return  num1 * num2
    if operacion == 4:
        return  num1/num2
print(calculadora_basica(10,2))'''

'''def contador_letras(cadena):
    for i in cadena:
        nueva_cadena = len(cadena.replace(" ",""))
    return print(f'El número de caracteres de {cadena} sin contar los espacios es: ', nueva_cadena)
print(contador_letras('Luis Antonio Perez'))'''

'''def numero_factorial(num):
    if num == 0:
        return 1
    else:
        factorial = 1
        for i in range(1,num + 1):
            factorial *=i
        return factorial
print(numero_factorial(4))'''

'''def es_primo(num):
  if num <= 1:
    return False
  for i in range(2, int(num**0.5) + 1):
    if num % i == 0:
      return False
  return True

numero = int(input("Ingrese un número: "))
if es_primo(numero):
  print(numero, "es primo")
else:
  print(numero, "no es primo")'''

'''def lista_ordenada():
    lista = (5,9,13,26,7,89,23,26,54,72)
    new_lista = sorted(lista)
    return new_lista
print(lista_ordenada())'''

class Person:
  name = "John"
  age = 36
  country = "Norway"
print(dir(Person))