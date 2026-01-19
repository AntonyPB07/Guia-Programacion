"""
EJERCICIO:
- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
    Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
    (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
- Utilizando las operaciones con operadores que tú quieras, crea ejemplos
    que representen todos los tipos de estructuras de control que existan
    en tu lenguaje:
    Condicionales, iterativas, excepciones...
- Debes hacer print por consola del resultado de todos los ejemplos.

DIFICULTAD EXTRA (opcional):
- Crea un programa que imprima por consola todos los números comprendidos
    entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
- Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
"""

# Solución del ejercicio
datos_estudiante = (
    {
        'nombre_estudiante': 'Antonio',
        'materias_aprobadas' : {'Español', 'Matemáticas', 'Ciencias'},
        'materia_actual' : 'Español',
        'calificacion' : [7,10,9],
        'total_clases' : 20,
        'asistencias' : 16,
        'activo' : False
    }, {
        'nombre_estudiante': 'Luis',
        'materias_aprobadas' : {'Historia', 'Matemáticas', 'Ciencias'},
        'materia_actual' : 'Ingles',
        'calificacion' : [6,8,7],
        'total_clases' : 25,
        'asistencias' : 20,
        'activo' : True
    }
)

print("Bienvenido al sistema de consulta de estudiantes")

try:
    while input("Deseas consultar un estudiante? (s/n): ").lower() == 's':
        try:
            inp_nombre = input("Ingrese el nombre del estudiante: ").strip()
            
            if not inp_nombre:
                raise ValueError("El nombre no puede estar vacío")
                        
            for estudiante in datos_estudiante:
                if estudiante['nombre_estudiante'].lower() == inp_nombre.lower():
                    estudiante_encontrado = True
                    
                    if not estudiante['activo']:
                        print("Situacion del estudiante: Inactivo")
                    else:
                        try:
                            nombre = estudiante['nombre_estudiante']
                            materia = estudiante['materia_actual']
                            calificacion = estudiante['calificacion']
                            total_clases = estudiante['total_clases']
                            asistencias = estudiante['asistencias']
                            activo = estudiante['activo']
                            materias_aprobadas = estudiante['materias_aprobadas']

                            print(f"Estudiante: {nombre}")
                            if materia in materias_aprobadas:
                                print(f"Materia actual: {materia} ya fue cursada y aprobada")
                            else:
                                print(f"Materia actual: {materia}")
                            print("Calificaciones:")
                            for c in calificacion:
                                print(f"- {c}")
                            print(f"Total de clases: {total_clases}")
                            print(f"Asistencias: {asistencias}")

                            promedio = (sum(calificacion) / len(calificacion)) * 10
                            prom_asistencia = (asistencias / total_clases) * 100

                            if promedio >= 70 and prom_asistencia >= 80 and activo:
                                print("El estudiante aprobo la materia")
                            elif not activo:
                                print("El estudiante se encuentra inactivo")
                            else:
                                print("El estudiante no aprobo la materia")

                            print(f"Promedio de calificacion: {promedio}")
                            print(f"Porcentaje de asistencia: {prom_asistencia}")
                        
                        except ZeroDivisionError:
                            print("Error: No hay calificaciones o clases registradas")
                        except KeyError as e:
                            print(f"Error: Falta el campo {e} en los datos del estudiante")
                    break
            
            if not estudiante_encontrado:
                raise NameError(f"El estudiante '{nombre}' no se encontró en el sistema")
        
        except ValueError as ve:
            print(f"Error de entrada: {ve}")
        except NameError as ne:
            print(f"Error: {ne}")
        except KeyboardInterrupt:
            print("\nOperación cancelada por el usuario")
            break
        except Exception as e:
            print(f"Error inesperado: {e}")

except KeyboardInterrupt:
    print("\nPrograma interrumpido")
except Exception as e:
    print(f"Error crítico: {e}")
finally:
    print("Gracias por usar el sistema")
    exit()


# Solución del ejercicio opcional
# for i in range(10,56):
#     if (i == 16 or i % 3 == 0):
#         print("error")
#     else:
#         print(i)