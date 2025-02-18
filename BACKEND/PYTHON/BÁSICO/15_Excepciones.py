# *** EXCEPCIONES ***

def area_cuadrado(n):
    area = n * n
    return area

# *** TRY EXCEPT ELSE FINALLY ***
try:
    print(area_cuadrado(5))
    print(area_cuadrado(4))
    print(area_cuadrado('6'))
except:
    print('Hubo error, el "6" es string')
else: # Opcional (se ejecuta si existe alguna excepción)
    print('Se ejecuta si no hay alguna excepción')
finally: # Opcional (Se ejecuta siempre, así haya o no alguna excepción)
    print('Se ejecuta haya alguna excepción o no')

# Ejemplo
try:
    name = input('Enter your name:')
    year_born = input('Year you born:')
    age = 2019 - int(year_born)
    print(f'You are {name}. And your age is {age}.')
except TypeError:
    print('Type error occur')
except ValueError:
    print('Value error occur')
except ZeroDivisionError:
    print('zero division error occur')
else:
    print('I usually run with the try block')
finally:
    print('I alway run.')