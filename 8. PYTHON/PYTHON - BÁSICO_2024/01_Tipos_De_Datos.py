# *** TIPOS DE DATOS BÁSICOS ***
# Cadena de texto (str)
texto = 'String'

# Números (int, double, complex)
numero_entero = 24
numero_flotante = 24.9
numero_complejo = 3 + 2j

# Booleanos (True, False)
verdadero_falso = True

# *** TIPOS DE DATOS COMPUESTOS ***
# Listas (list)
mi_lista = ['Antonio', 'Perez', 24]

# Tuplas (tuple)
mi_tupla = ('Antonio', 'es', 'Ingeniero', 'Sistemas')

# Diccionarios (dict)
mi_diccionario = {
    'Nombre':'Antonio',
    'Apellido':'Pérez',
    'Profesión':'Ingeniero',
    'Lenguajes':{'Python', 'Javascript', 'Sql'},
    'Edad':24
}

# Conjuntos (set)
set = {'vaca', 'pollo', 'toro', 'gallina', 'caballo'}

# *** RESUMEN ***
print(type(10))                  # Int
print(type(3.14))                # Float
print(type(1 + 3j))              # Complex
print(type('Anthony'))          # String
print(type([1, 2, 3]))           # List
print(type({'name':'Asabeneh'})) # Dictionary
print(type({9.8, 3.14, 2.7}))    # Set
print(type((9.8, 3.14, 2.7)))    # Tuple