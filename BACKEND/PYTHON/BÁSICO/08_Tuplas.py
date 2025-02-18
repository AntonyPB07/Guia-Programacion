# *** TUPLAS ***
# LAS TUPLAS SON INMUTABLES, NO SE PUEDEN MODIFICAR LOS VALORES.
# Creación de las tuplas
constructor_tupla = tuple()                 # Al ser un contructor no se le pueden dar los valores desde aquí.
tupla_vacia = ('Esta', 'es', 'una', 'tupla')

# Dandole valor al constructor (constructor_tupla)
constructor_tupla = (24, 'Antony', 'Ingeniero', 'Gaming')
print(tupla_vacia)
print(constructor_tupla)

# Busqueda de valores
print(constructor_tupla[0])
print(constructor_tupla[-1])

# Funci ones de las tuplas (count, index)
print(tupla_vacia.count('es'))              # Count cuenta cuantas veces se encuentra 'es' en la tupla, en este caso nos devuelve uno.
print(constructor_tupla.index('Antony'))    # index nos indica el índice donde se encuentra posicionado el valor que se le indice, en este caso 'Antony'

# Aunque las tuplas son inmutables, se pueden fusionar y crear una nueva tupla.
tupla_fusionada = constructor_tupla + tupla_vacia
print(tupla_fusionada)

# Siendo inmutable las tuplas, para modificar los valores, se puede hacer la conversión de tuplas a listas y así poder modificar los valores.
nueva_tupla = list(tupla_fusionada)
nueva_tupla[7] = 'Lista'
nueva_tupla.insert(4, 'Jovenazo')
print(type(nueva_tupla))
print(nueva_tupla)