# *** LISTAS ***
print('*** LISTAS ***')

mi_lista = ['Antonio', 'Perez', 24]     # Se inicializa con elementos específicos ya definidos.
print(type(mi_lista))
print(mi_lista)

num_lista = [2,1,34,21,65,76,43,23,87]

otra_lista = list()                     # Se inicializa como una lista vacía, que luego puede ser modificada para agregarle elementos.

otra_lista.append(10)                   # append agrega elementos a la lista
otra_lista.append("Hola")
otra_lista.append(True)
otra_lista.append(False)
otra_lista.append(24)
otra_lista.append('America')
otra_lista.append('Programación')
otra_lista.insert(2, 'Azul')    # Inserta un nuevo dato en la lista, recorre el dato que estaba en el indice 2 e inserta el nuevo en esa posicion.
otra_lista.remove(True)                 # Elimina el valor True de la lista
otra_lista.pop()                        # Si no se le especifica un valor en concreto, eliminará el ultimo dato de la lista.
otra_lista.pop(1)                       # Elimina el valor que estaba en el indice 1, con la diferencia de que el elemento borrado lo podemos guardar y hacer uso de ello
del otra_lista[1]                       # Elimina el elemento que se encuentra en el indice 1
otra_lista[0] = 'Inicio'                # Sobreescribe el valor del indice seleccionado, en este caso el valor sobreescrito es el del indice 0
copia_lista = otra_lista.copy()         # Crea una copia de la lista seleccionada
otra_lista.clear()                      # Limpia la lista quitando todos los elementos.
num_lista.sort()                        # Ordena la lista de menor a mayo(solo enteros)
print(num_lista)
print(copia_lista)
print(otra_lista)
print('SUMA DE AMBAS LISTAS SE CONCATENAN:')
print(mi_lista + otra_lista)

print('*** ACCEDER A LOS VALORES DE LA LISTA ***')
print(mi_lista[0])      # Accedemos a los valores de acuerdo a su indice
print(mi_lista[2])
print(mi_lista[1])
print(mi_lista[-1])
print(mi_lista[-3])

# Desempaquetado de la lista 'mi_lista'
print('*** DESEMPAQUETADO DE LISTA ***')
nombre, apellido, edad = mi_lista
name, *rest = mi_lista
print(rest)
print(nombre)

# Dividir listas
fruits = ['banana', 'orange', 'mango', 'lemon']
all_fruits1 = fruits[0:4] # it returns all the fruits
print(all_fruits1)
# this will also give the same result as the one above
all_fruits = fruits[0:] # if we don't set where to stop it takes all the rest
print(all_fruits)
orange_and_mango = fruits[1:3] # it does not include the first index
print(orange_and_mango)
orange_mango_lemon = fruits[1:]
print(orange_mango_lemon)
orange_and_lemon = fruits[::2] # here we used a 3rd argument, step. It will take every 2cnd item - ['banana', 'mango']
print(orange_and_lemon)

# Verificar items en la lista
fruits = ['banana', 'orange', 'mango', 'lemon']
does_exist = 'banana' in fruits
print(does_exist)  # True
does_exist = 'lime' in fruits
print(does_exist)  # False