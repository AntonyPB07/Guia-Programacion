# *** MANEJO DE FICHEROS ***
import os
import json
import csv
'''
r: Solo lectura (Modo default).
rb: Solo lectura binaria.
r+: Lectura y escritura.
rb+: Lectura y escritura binaria .
w: Solo escritura. Si el archivo existe se sobrescribe, en caso contrario se crea.
wb: Solo escritura binaria. Si el archivo existe se sobrescribe, en caso contrario se crea.
w+: Lectura y escritura. Si el archivo existe se sobrescribe, en caso contrario se crea.
wb+: Lectura y escritura binaria. Si el archivo existe se sobrescribe, en caso contrario se crea.
a: Añade contenido al final del archivo. Si el archivo no existe se crea.
ab: Añade contenido al final del archivo de forma binaria. Si el archivo no existe se crea.
a+: Añade y lee. Si el archivo no existe se crea.
ab+: Añade y lee de forma binaria. Si el archivo no existe se crea.
x: Crea el archivo especificado, devuelve un error si el archivo existe
t: Valor por defecto. Modo texto
'''

# *** .TXT ***
# ABRE EL ARCHIVO ESPECIFICANDO LA RUTA DONDE SE ENCUENTRA EL ARCHIVO Y EL TIPO DE MANEJO DEL FICHERO, SI EL ARCHIVO NO EXISTE, ESTE LO CREA
txt_file = open('../PYTHON - INTERMEDIO_2024/mi_archivo.txt', 'r+')

# SE AÑADE TEXTO AL ARCHIVO
txt_file.write("Esta es una prueba para\ntrabajar con archivos txt\ntambien se trabajará con archivos\ncsv, json,xml")

# print(txt_file.readline()) IMPRIME UNA SOLA LINEA DEL DOCUMENTO TXT
# print(txt_file.readlines()) IMPRIME TODO EL DOCUMENTO EN VARIAS LINEAS

# IMPRIME TODO EL DOCUMENTO LINEA POR LINEA
for line in txt_file.readlines():
    print(line)

# CIERRA EL ARCHIVO PREVIAMENTE ABIERTO
txt_file.close()

# WITH se recomienda al manejar archivos, garantiza la correcta gestión de los mismos. ES UNA NUEVA FORMA DE ABRIR ARCHIVOS USANDO WITH, CIERRA LOS ARCHIVOS POR SI MISMO.
with open("../PYTHON - INTERMEDIO_2024/mi_archivo.txt", "a") as my_other_file:
    # Aquí va la intrucción a realizar.
    my_other_file.write("\nTexto insertado al final, cerrando el archivo.")

# BORRA EL ARCHIVO TXT
#os.remove('../PYTHON - INTERMEDIO_2024/mi_archivo.txt')

# *** .JSON ***
# ABRE EL ARCHIVO ESPECIFICANDO LA RUTA DONDE SE ENCUENTRA EL ARCHIVO Y EL TIPO DE MANEJO DEL FICHERO, SI EL ARCHIVO NO EXISTE, ESTE LO CREA
json_file = open('../PYTHON - INTERMEDIO_2024/mi_archivo.json', 'w+')

# SE CREA EL CONTENIDO DEL JSON (SE CREAN DICCIONARIOS)
json_content = {
    'nombre':'Antonio',
    'apellido':'Perez',
    'edad':24,
    'ocupacion':'Ingeniero',
    'Lenguajes':['Python', 'Java', 'Javascript']
}

# LA FUNCIÓN JSON.DUMP() ES UTILIZADA PARA ESCRIBIR DATOS EN FORMATO JSON. TOMA DOS ARGUMENTOS PRINCIPALES: EL PRIMERO ES EL CONTENIDO JSON
# QUE SE DESEA ESCRIBIR EN EL ARCHIVO, Y EL SEGUNDO ES EL OBJETO DE ARCHIVO DONDE SE ESCRIBIRÁ EL CONTENIDO JSON.
json.dump(json_content, json_file, indent=2)

# CIERRA EL ARCHIVO PREVIAMENTE ABIERTO
json_file.close()

with open('../PYTHON - INTERMEDIO_2024/mi_archivo.json') as my_other_file:
    for line in my_other_file.readlines():
        print(line)

# LA FUNCIÓN JSON.LOAD() SE UTILIZA PARA CARGAR DATOS DESDE UN ARCHIVO EN FORMATO JSON. TOMA UN ÚNICO ARGUMENTO QUE ES EL OBJETO DE ARCHIVO ABIERTO
# DESDE EL CUAL SE LEERÁN LOS DATOS JSON.
json_pass_dict = json.load(open('../PYTHON - INTERMEDIO_2024/mi_archivo.json'))

# AQUÍ SE DEMUESTRA QUE AL IMPRIMIR EL JSON, LO MUESTRA EN CONSOLA E INDICA QUE AHORA ES DE TIPO DICT (DICCIONARIO)
print(json_pass_dict)
print(type(json_pass_dict))

# *** .CSV ***
csv_file = open("../PYTHON - INTERMEDIO_2024/mi_archivo.csv", "w+")

# ESCRIBIMOS DENTRO DEL ARCHIVO CSV MEDIANTE WRITER()
csv_writer = csv.writer(csv_file)

# INGRESAMOS TEXTO EN CADA FILA, Y ESTA SE COMPONE DE COLUMNAS QUE SE INGRESEN (DEPENDE DEL NUMERO DE VALORES SERÁN EL NÚMERO DE COLUMNAS)
csv_writer.writerow(["name", "surname", "age", "language", "website"])
csv_writer.writerow(["Brais", "Moure", 35, "Python", "https://moure.dev"])
csv_writer.writerow(["Roswell", "", 2, "COBOL", ""])

csv_file.close()

with open("../PYTHON - INTERMEDIO_2024/mi_archivo.csv") as my_other_file:
    for line in my_other_file.readlines():
        print(line)

# *** .XLSX

# *** .XML ***