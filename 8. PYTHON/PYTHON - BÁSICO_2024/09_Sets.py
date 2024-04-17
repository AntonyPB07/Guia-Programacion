# *** SETS ***
# Creación de SET (SET NO ES UNA ESTRCUTURA ORDENADA Y ES MUTABLE)
nuevo_set = set()
otra_forma_set = {}     # Se puede confundir con los diccionarios
set = {'vaca', 'pollo', 'toro', 'gallina', 'caballo'}
print(set)
print(type(otra_forma_set))

# Agregar, eliminar y buscar elementos en el Set (Set NO admite valores repetidos)
set.add('pato')
set.update(['rana', 'peces', 'conejos'])    # Así se agregan más de un elemento a la vez
set.remove('toro')
print('caballo' in set)
print('baballo' in set)
print(set)

# Se puede limpiar(vaciar) y eliminar el Set con 'clear' y 'del'
set.clear()
del set

# ACLARACIÓN: LOS SETS NO SE TIENEN QUE PASAR A LISTAS PARA MODIFICARSE U OBTENER EL INDICE DE UN VALOR.

# Unir varios Sets (union) y separarlos (difference).
set_persona = {'Antonio', 24, 'Ingeniero'}
set_nuevo = {'Python', 'Sql', 'Javascript', 'HTML', 'CSS'}
set_union = set_persona.union(set_nuevo)
print(set_union)
print(set_persona.difference(set_nuevo))