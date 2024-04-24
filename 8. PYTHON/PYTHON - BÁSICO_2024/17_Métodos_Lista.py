lista = [3, 1, 4, 1, 5, 9, 2, 6, 5]

# append() ---> Agrega un elemento al final de la lista.
lista.append(24)
print(lista)

# clear() ---> Elimina todos los elementos de la lista.
lista.clear()
print(lista)

# copy() ---> Crea una copia superficial de la lista.
lista = [3, 1, 4, 1, 5, 9, 2, 6, 5, 1]
lista2 = lista.copy()
print(lista2)

# count() ---> Cuenta el número de ocurrencias de un elemento en la lista.
count = lista.count(1)
print(count)

# extend() ---> Extiende la lista agregando los elementos de otra lista (o iterable) al final.
lista2 = [4, 5,26,105,89]
lista.extend(lista2)
print(lista)

# index() ---> Devuelve el índice de la primera ocurrencia de un elemento en la lista.
indice = lista.index(6)
print(indice)

# insert() ---> Inserta un elemento en una posición específica de la lista.
lista.insert(1, 69)
print(lista)

# pop() ---> Elimina y devuelve el elemento en una posición específica de la lista.
elemento = lista.pop(2)
print(elemento)
print(lista)

# remove() ---> Elimina la primera ocurrencia de un elemento específico de la lista.
lista.remove(1)
print(lista)

# reverse() ---> Invierte el orden de los elementos en la lista.
lista.reverse()
print(lista)

# sort() ---> Ordena los elementos de la lista en su lugar (de menor a mayor, por defecto).
lista.sort()
print(lista)