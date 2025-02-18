# *** MÓDULOS ***
import mi_modulo                            # Así se importa un módulo con todo lo que contiene.
from mi_modulo import datos_personales      # Así se importa algo en específico de los módulos, en este caso, se importa unicamene la función datos_personales.
import random                               # Así se importan módulos propios del lenguaje.
from math import pi as Valor_pi             # Así se le puede dar otro nombre a lo que se importe, viene siendo un ALIAS.

# Haciendo uso de las importaciones creadas
datos0 = mi_modulo.datos_personales('Natalia', 24, 'F')
datos1 = datos_personales('Luis', 25, 'M')

print(datos0)
print(datos1)

# Haciendo uso de importaciones del propio lenguaje
numero = random.randint(1,100)
if numero > 25:
    print(f'El valor de {numero} es mayor a 25')
else:
    print('El valor es menor a 25')

# Haciendo uso de importaciones del propio lenguaje usando un Alias
def area_circulo(Valor_pi, radio):
    area = Valor_pi * pow(radio,2)
    return area
print(area_circulo(Valor_pi, 2))