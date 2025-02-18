my_set = {1, 2, 5, 25, 13, 54, 11}
my_set2 = {5, 25, 23,53,21,95,46}
conjunto = {1, 2, 3}
# add() ---> Agrega un elemento al conjunto. Si el elemento ya está presente, no se realiza ninguna acción.
my_set.add(4)
print(my_set)

# clear() ---> Elimina todos los elementos del conjunto, dejándolo vacío.
conjunto.clear()
print(conjunto)

# difference() ---> Retorna un nuevo conjunto que contiene los elementos que están presentes en el primer conjunto pero no en el segundo.
diferencia = my_set.difference(my_set2)
print(diferencia)

# discard() ---> Elimina un elemento específico del conjunto. No genera ningún error si el elemento no está presente.
my_set.discard(50)
my_set.discard(11)
print(my_set)

# intersection() ---> Retorna un nuevo conjunto que contiene los elementos que están presentes en ambos conjuntos dados.
interseccion = my_set.intersection(my_set2)
print(interseccion)

# issubset() ---> Retorna True si todos los elementos del conjunto están presentes en otro conjunto dado.
es_subconjunto = my_set.issubset(my_set2)
print(es_subconjunto)

# issuperset() ---> Retorna True si todos los elementos de otro conjunto están presentes en el conjunto.
es_superset = my_set.issuperset(my_set2)
print(es_superset)

# pop() ---> Elimina y devuelve un elemento arbitrario del conjunto. Genera un error KeyError si el conjunto está vacío.
elemento = my_set.pop()
print(elemento)
print(my_set)

# remove() ---> Elimina un elemento específico del conjunto. Genera un error KeyError si el elemento no está presente.
my_set.remove(54)
print(my_set)

# union() ---> Retorna un nuevo conjunto que contiene todos los elementos de dos conjuntos dados.
conjunto_unido = my_set.union(my_set2)
print(conjunto_unido)

# update() ---> Agrega elementos al conjunto. Puede tomar un conjunto, una lista, una tupla u otro iterable como argumento.
my_set.update([80,90,100])
print(my_set)

# *** SYMMETRIC DIFFERENCES ***
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

symmetric_diff = set1.symmetric_difference(set2)
print("Diferencia Simétrica:", symmetric_diff)  # Output: {1, 2, 5, 6}

symmetric_diff = set1 ^ set2
print("Diferencia Simétrica:", symmetric_diff)  # Output: {1, 2, 5, 6}