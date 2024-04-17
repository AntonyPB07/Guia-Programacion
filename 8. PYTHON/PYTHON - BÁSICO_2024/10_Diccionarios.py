# *** DICCIONARIOS ***
# Creación de Diccionarios (DICCIONARIOS SE ESTRUCTURAN TENIENDO keys:values (clave:valor) )
mi_diccionario = dict()
otro_diccionario = {}

otro_diccionario = {'Club':'America', 'País':'México', 'Títulos':14, 'Fundación':1916,}
mi_diccionario = {
    'Nombre':'Antonio',
    'Apellido':'Pérez',
    'Profesión':'Ingeniero',
    'Lenguajes':{'Python', 'Javascript', 'Sql'},
    'Edad':24
}
print(otro_diccionario)
print(mi_diccionario)

# Obtener el valor de las claves
print(mi_diccionario['Nombre'])
print(mi_diccionario.get('Nombre'))     # Esta manera es más segura, ya que si no encuentra la clave, en vez de dar error nos muestra 'none'
print('Nombre')

# Sobreescribe el valor de la clave seleccionada, agregar una nueva clave con su respectivo valor y eliminar un valor de mi diccionario.
mi_diccionario['Nombre'] = 'Luis'       # Sobreescrive el valor
mi_diccionario['Escuela'] = 'TESCI'     # Agrega una nueva clave con su respectivo valor
del mi_diccionario['Edad']              # Elimina el valor y clave Edad de mi_diccionario
print(mi_diccionario)

# Eliminación de pares de claves y valores de un diccionario
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct.pop('key1') # removes key1 item --- pop(key): elimina el elemento con el nombre de clave especificado:
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct.popitem() # removes the last item --- popitem(): elimina el último elemento
del dct['key2'] # removes key2 item --- del: quita un elemento con el nombre de clave especificado

# Busqueda de claves y valores
print('Nombre' in mi_diccionario)       # Devuelve true ya que lo que busca es la clave, no el valor
print('Antonio' in mi_diccionario)      # Devuelve false ya que Antonio no es una clave, es un valor

# Funciones
print(mi_diccionario.items())           # Agrupa por clave:valor
print(mi_diccionario.keys())            # Retorna solo las claves
print(mi_diccionario.values())          # Retorna solo los valores
print(mi_diccionario.fromkeys(('Calle', 'Colonia', 'Municipio')))       # Crea un diccionario sin valores