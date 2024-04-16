# *** STRINGS ***
print('*** STRING ***')
saltos_en_linea = 'Este texto contiene \n saltos en línea para \n darle una mejor lectura al texto.\n'
print(saltos_en_linea)

texto_tabulado = '\t Este texto se encuntra tabulado.'
print(texto_tabulado)

multilinea_string = '''I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.'''
print(multilinea_string)

print('This is a backslash symbol (\\)') # To write a backslash
print('In every programming language it starts with \"Hello, World!\"')

# *** FORMATEO ***
print('*** FORMATEO ***')
# string(%s), integer(%d), floating point numbers(%f), Floating point numbers with fixed precision(%.number of digitsf)
nombre, apellido, edad, email = 'Antonio', 'Pérez', 24, 'antonio@gmail.com'
print('Mi nombre es ' + nombre + ' ' + apellido + ', tengo ' + str(edad) + ' y mi correo es: ' + email)     # Evitar hacerlo
print('Mi nombre es %s %s, tengo %d y mi correo es: %s' %(nombre, apellido, edad, email))                   # Es anticuado
print('Mi nombre es {} {}, tengo {} y mi correo es: {}'.format(nombre, apellido, edad, email))        # Manera actual de hacerlo
print(f'Mi nombre es {nombre} {apellido}, tengo {edad} y mi correo es: {email}')                            # Mejor forma de hacerlo

# *** DESEMPAQUETANDO CARACTERES ***
print('*** DESEMPAQUETANDO CARACTERES ***')
lenguaje = 'Python'
a,b,c,d,e,f = lenguaje
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print(a,f,c,b,e,d)

# Dividir Strings
print('*** DIVISION DE STRINGS ***')
lenguaje_slice = lenguaje[1:3]
print(lenguaje_slice)
lenguaje_slice2 = lenguaje[1]
print(lenguaje_slice2)
lenguaje_slice3 = lenguaje[-2]
print(lenguaje_slice3)
lenguaje_slice4 = lenguaje[0:6:2]
print(lenguaje_slice4)

# Reverse
print('*** REVERSE ***')
reversed_lenguaje = lenguaje[::-3]
print(reversed_lenguaje)