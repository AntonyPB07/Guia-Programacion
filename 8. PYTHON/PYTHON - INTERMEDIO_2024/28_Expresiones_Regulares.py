# *** EXPRESIONES REGULARES ***
import re

'''
ASCII, A ---> Hace que varios escapes coincidan solo en caracteres ASCII con la propiedad respectiva.
DOTALL, S ---> Hace que . coincida con cualquier caracter, incluidas las nuevas líneas.
IGNORECASE, I ---> Hace coincidencias que no distingan entre mayúsculas y minúsculas.
LOCALE, L ---> Hace una coincidencia con reconocimiento de configuración regional.
MULTILINE, M ---> Coincidencia de varias líneas, que afecta a ^ y $.
VERBOSE, X (for “extended”) ---> Habilite RE detallados, que se pueden organizar de manera más limpia y comprensible.

group(): Retorna la cadena de caracteres que coincide con la RE
start(): Retorna la posición de inicio de la coincidencia
end(): Retorna la posición final de la coincidencia
span(): Retorna una tupla que contiene (inicio, final) las posiciones de coincidencia
'''
cadena_texto = 'Esta es una cadena para poder trabajar con las expresiones regulares'
cadena_texto2 = 'Esta es otra cadena de texto para trabajar con REGEX'

# *** RE.SEARCH ***
# Busca de la primera donde se produce una coincidencia, y retorna un Match correspondiente. Retorna None si ninguna posición en la cadena coincide con el patrón.
res = re.search('poder trabajar',cadena_texto)
print(res)
start,end = res.span()
print(cadena_texto[start:end])

# *** RE.COMPILE ***
# Compila una REGEX en un objeto de patrón. Este objeto de patrón puede ser utilizado para realizar operaciones de búsqueda y coincidencia de patrones más eficiente.
res = re.compile(cadena_texto)
print(res)

# *** RE.MATCH ***
# Intenta hacer coincidir el patrón desde el inicio de la cadena. Si el patrón coincide con el inicio de la cadena, devuelve un objeto de coincidencia; si no, devuelve None.
res = re.match('Esta es',cadena_texto)
print(res)

# *** RE.FULLMATCH ***
# Intenta hacer coincidir el patrón con la cadena completa. Devuelve un objeto de coincidencia si el patrón coincide con toda la cadena, de lo contrario, devuelve None.
res = re.fullmatch(cadena_texto2,cadena_texto)
print(res)

# *** RE.SPLIT ***
# Divide una cadena en subcadenas usando un patrón como delimitador y devuelve una lista de las subcadenas resultantes.
res = re.split('poder',cadena_texto)
print(res)

# *** RE.FINDALL ***
# Busca todas las ocurrencias de un patrón en una cadena y devuelve una lista con todas las coincidencias encontradas.
res = re.findall('es',cadena_texto)
print(res)

# *** RE.FINDITER ***
# Busca todas las ocurrencias de un patrón en una cadena y devuelve un iterador que produce objetos de coincidencia para cada ocurrencia encontrada.
res = re.finditer('cadena',cadena_texto)
print(res)

# *** RE.SUB ***
# Reemplaza todas las ocurrencias de un patrón en una cadena con otro texto y devuelve la cadena resultante.
res = re.sub('expresiones regulares','REGEX',cadena_texto)
print(res)

# *** RE.SUBN ***
# Similar a re.sub(), pero además devuelve una tupla que contiene la cadena resultante y el número total de reemplazos realizados.
res = re.subn('expresiones regulares','regex',cadena_texto)
print(res)

# *** RE.ESCAPE ***
# Escapa todos los caracteres no alfanuméricos en un patrón dado, lo que permite tratar el patrón como una cadena literal.
res = re.escape(cadena_texto)
print(res)

# *** RE.PURGE ***
# Borra la caché interna de expresiones regulares compiladas. Esto puede ser útil en situaciones donde se necesita liberar memoria.
re.purge