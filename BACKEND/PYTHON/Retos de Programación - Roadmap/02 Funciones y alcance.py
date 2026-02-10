#* Solución del ejercicio.
# Instrucciones:
# Crea ejemplos de funciones básicas que representen las diferentes
#   posibilidades del lenguaje:
#       Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
#  Comprueba si puedes crear funciones dentro de funciones.
#  Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
#  Pon a prueba el concepto de variable LOCAL y GLOBAL.
#  Debes hacer print por consola del resultado de todos los ejemplos.
#    (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

def mensaje_informativo():
    print("Esta es una función sin parámetros ni retorno")

mensaje_informativo()
    
def operacion_simple(valor:int):
    suma = valor + 25
    print(f"El resultado de la suma es: {suma}")
    
operacion_simple(15)
    
def area_rectangulo(base: int, altura:int):
    area_total = base * altura
    print(f"El área del rectángulo es: {area_total}")

area_rectangulo(5,15)
    
def liga_mx(club: str, titulos: int):
    return f"El club {club} ha ganado {titulos} títulos en la Liga MX"
    
club_ganador = liga_mx("América", 16)
print(f"El club más grande es: {club_ganador}")

def videojuego_fav():
    nombre_juego = "Resident Evil"
    edad = input("¿Cuál es tu edad?: ")
    if int(edad) >= 18:
        return f"Puedes jugar {nombre_juego}"
    else:
        return f"No puedes jugar {nombre_juego} porque contiene contenido para adultos"
    
print(videojuego_fav())

edad = 14
def ver_pelicula():
    identificacion = True
    acompañado = False
    def validar_entrada():
        if edad >= 18 and identificacion:
            return "Puede ver la película"
        elif edad < 18 and acompañado:
            return "Puede ver la película porque está acompañado por un adulto"
        else:
            return "No puede ver la película"
    return validar_entrada()
print(ver_pelicula())

calificaciones = [8.4, 9.2, 7.7, 6.3, 10]
def promedio_calif(calificaciones = list) -> str:
    promedio = round(sum(calificaciones) / len(calificaciones), 2)
    calificacion_mayor = max(calificaciones)
    calificacion_menor = min(calificaciones)
    return f"El promedio de las calificaciones es: {promedio}, siendo la calificación más alta de {calificacion_mayor} y la más baja de {calificacion_menor}"
print(promedio_calif(calificaciones))

vehiculos = (
    {
        'Vehiculo':'Carro', 
        'precio':280000, 
        'color': 'Rojo'
    }, {
        'Vehiculo':'Moto', 
        'precio':110000,
        'color': 'Azul'
    }, {
        'Vehiculo':'Camioneta', 
        'precio': 450000,
        'color': 'Azul'
    }
)
def comprar_vehiculo():
    descuento = 0.15
    def aplicar_descuento():
        licencia_manejo = True
        if licencia_manejo:
            for info in vehiculos:
                vehiculo = info['Vehiculo']
                precio = info['precio']
                color = info['color']
                if color == 'Azul':
                    precio_final = precio - (precio * descuento)
                    info['precio'] = precio_final
                    print(f"El precio final del vehículo {vehiculo} con color {color} es de: {precio_final}. Precio antes del descuento: {precio}")
        else:
            print("No puedes comprar un vehículo sin licencia de manejo")
    aplicar_descuento()
comprar_vehiculo()
print("Intendando acceder a variables locales desde fuera de la función...")
try:
    print(descuento)
except NameError as e:
    print(f"Error:{e}")
try:
    print(licencia_manejo)
except NameError as e:
    print(f"Error:{e}")

                
#* Solución del ejercicio opcional.
# Instrucciones:
# Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
# La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
#   Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
#   Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
#   Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
#   La función retorna el número de veces que se ha impreso el número en lugar de los textos.

def func_alcan (cadena1: str, cadena2: str) -> int:
    contador = 0
    
    for i in range (1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print(f"{cadena1} {cadena2}")
        elif i % 5 == 0:
            print(cadena2)
        elif i % 3 == 0:
            print(cadena1)
        else:        
            print(i)
            contador += 1
    return contador
    
resultado = func_alcan("Rosa", "Melcacho")
print(f"Número de veces que se imprimió número en vez de texto: {resultado}")