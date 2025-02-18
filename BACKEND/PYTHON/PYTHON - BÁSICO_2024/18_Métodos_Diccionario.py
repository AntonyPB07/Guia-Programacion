diccionario = {'a': 'Antonio', 'b': 2, 'c': 3, 'd':'Luis'}
# clear() ---> 	Elimina todos los elementos del diccionario
diccionario1 = {'a': 1, 'b': 2, 'c': 3}
diccionario1.clear()
print(diccionario1)

# copy() ---> Devuelve una copia del diccionario
diccionario2 = diccionario.copy()
print(diccionario2)

# fromkeys() ---> Devuelve un diccionario con las claves y el valor especificados
claves = ['a', 'b', 'c']
valor_predeterminado = 0
diccionario_fromkeys = dict.fromkeys(claves, valor_predeterminado)
print(diccionario_fromkeys)

# get() ---> Devuelve el valor de la clave especificada
valor = diccionario.get('d')
print(valor)

# items() ---> Devuelve una lista que contiene una tupla para cada par clave-valor
items = diccionario.items()
print(items)

# keys() ---> Devuelve una lista que contiene las claves del diccionario
keys = diccionario.keys()
print(keys)

# pop() ---> Elimina el elemento con la clave especificada
valor = diccionario.pop('b')
print(valor)
print(diccionario)

# popitem() ---> Elimina el último Par clave-valor insertado
par = diccionario.popitem()
print(par)
print(diccionario)

# setdefault() ---> Devuelve el valor de la clave especificada. Si la clave no existe: inserte la clave, con el valor especificado
valor = diccionario.setdefault('Nombre', 'Messi')
print(valor)
print(diccionario)

# update() ---> Actualiza el diccionario con los pares clave-valor especificados
diccionario1 = {'a': 1, 'b': 2}
diccionario2 = {'b': 3, 'c': 4}
diccionario1.update(diccionario2)
print(diccionario1)

# values() ---> Devuelve una lista de todos los valores del diccionario
values = diccionario.values()
print(values)