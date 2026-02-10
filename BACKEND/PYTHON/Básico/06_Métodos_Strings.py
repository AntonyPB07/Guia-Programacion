lenguajes_programacion = 'python, Javascript, java, JAVA'
textopara_demostracion = '**Esta es una cadena de CARACTERES para realizar pruebas**'
texto = '-'
print('1-',lenguajes_programacion.capitalize())         # La primera letra la pone en mayúscula
print('2-',lenguajes_programacion.casefold())           # Transforma el texto en minúscula
print('3-',lenguajes_programacion.count('a'))           # Cuenta todas las letras seleccionadas (en este caso es la 'a')
print('4-',lenguajes_programacion.endswith('ava'))      # Verifica si una cadena de texto termina con el sufijo especificado ('ava').
print('5-',lenguajes_programacion.find('ript'))         # Busca la primera aparición de ('ript') dentro de la cadena de texto. Devuelve el índice de la primera ocurrencia o -1 si la subcadena no se encuentra.
print('6-',lenguajes_programacion.index('script'))      # Encontrar el índice de la primera aparición de un elemento en una lista.
print('7-',lenguajes_programacion.isalnum())            # Devuelve True si todo Los caracteres de la cadena son alfanuméricos
print('8-',lenguajes_programacion.isalpha())            # Verifica si todos los caracteres en la cadena de texto son caracteres alfabéticos (letras).
print('9-',lenguajes_programacion.isnumeric())          # Pregunta si es numerico (retorna true o false)
print('10-',texto.join(lenguajes_programacion))         # Concatena elementos de una secuencia (como una lista o una tupla) utilizando la cadena como separador.
print('11-',lenguajes_programacion.lower())             # Transforma el texto en minuscula
print('12-',lenguajes_programacion.replace('JAVA', 'Kotlin'))   # crear una nueva cadena donde todas las ocurrencias de un substring (subcadena) específico son reemplazadas por otra subcadena.
print('13-',lenguajes_programacion.rfind('th'))         # Busca la última aparición de ('th') dentro de la cadena de texto. Devuelve el índice de la última ocurrencia o -1 si la subcadena no se encuentra.
print('14-',lenguajes_programacion.rindex('ava'))       # Busca la última ocurrencia de una subcadena en una cadena y devuelve su índice.
print('15-',textopara_demostracion.rsplit(',',2))   # Divide una cadena en subcadenas utilizando un separador específico, comenzando desde el final de la cadena (de derecha a izquierda).
print('16-',textopara_demostracion.split())             # Divide una cadena en subcadenas utilizando un separador específico. Este método devuelve una lista de las subcadenas resultantes después de la división.
print('11-',lenguajes_programacion.startswith('pyt'))   # Verifica que el texto comience con ls caracteres 'pyt' en este caso
print(textopara_demostracion.strip())                   # eliminar los espacios en blanco (u otros caracteres especificados) al principio y al final de una cadena.
print(textopara_demostracion.swapcase())                # Intercambia las letras minúsculas por mayúsculas y viceversa en una cadena.
print(textopara_demostracion.title())                   # Convierte el primer carácter de cada palabra a mayúsculas
print('7-',lenguajes_programacion.upper())              # Transforma el texto en mayúscula
print('10-',lenguajes_programacion.upper().isupper())   # Transforma el texto en mayúscula y pregunta si el texto está en mayúscula
print('12-',lenguajes_programacion.expandtabs())        # Reemplaza las tabulaciones por espacios en una cadena de texto.