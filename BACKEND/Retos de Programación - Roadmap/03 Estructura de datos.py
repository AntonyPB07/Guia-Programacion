# * Solución del ejercicio.
# Instrucciones:
# Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
# Utiliza operaciones de inserción, borrado, actualización y ordenación.

telephones = []
types_contact = ("Family", "Friend", "Work","Emergency")
code_country = {"México":"52","United States":"1", "Canada":"44", "Colombian":"33"}
codes = {}
schedule = {
    "name": "",
    "telephone": "",
    "type": "",
    "country":""
}

# codigos registrados agregarlos al set (codes), agregar un nuevo pais con su respectivo codigo, hacer que el campo nuevo aparezca
# en registros posteriores, validar campos

def add_contact():
    name = input("Ingresa el nombre del contacto: ")
    phone = input("Ingresa el telefono del contacto: ")
    schedule["name"] = name
    for i, type_key in enumerate(types_contact):
        print(f" {i + 1}. {type_key}")
    result_type = input(f"Selecciona una opción (1-4): ")
    schedule["type"] = types_contact[int(result_type)-1]
    for x, country_key in enumerate(code_country):
        print(f" {x + 1}. {country_key}")
    result_country = input("Selecciona una opción (1-4): ")
    schedule["country"] = list(code_country.keys())[int(result_country)-1]
    schedule["telephone"] = "+" + list(code_country.values())[int(result_country)-1] + " " + phone
    def add_phone_number():
        telephones.append(schedule["telephone"])
    add_phone_number()   
    print("¿Desea agregar un nuevo campo al contacto? (s/n)")
    result = input().lower()
    if result == 's':
        new_field = input("Ingrese el nombre del campo: ")
        new_value = input("Ingrese el valor del campo: ")
        schedule[new_field] = new_value
    elif result == 'n':
        print("No se agregó ningún otro campo")
    else:
        print("Respuesta no válida. No se agregará ningún campo nuevo.")
    return

def search_contact():
    inf_contact = input("Ingresa el nombre del contacto: ")
    if inf_contact.lower() == schedule["name"].lower():
        print("Contacto encontrado: ")
        for key, value in schedule.items():
            print(f"- {key.title()}: {value}")
    else:
        print(" Contacto no encontrado.")

def update_contact():
    upd_contact = input("Ingresa el nombre del contacto: ")
    if upd_contact.lower() == schedule["name"].lower():
        new_telephone = input("Ingresa el nuevo número telefónico: ")
        schedule["telephone"] = new_telephone
        print("Telefono actualizado correctamente")
        print(schedule)
    else:
        print("Contacto no encontrado")
    return

def delete_contact():
    del_contact = input("Ingresa el nombre del contacto: ")
    if del_contact.lower() == schedule["name"].lower():
        result_delete = input(f"¿Desea eliminar al contacto {del_contact} de la agenda? Esta acción no puede restaurarse. (s/n)")
        if result_delete == 's':
            schedule.clear()
        else:
            print("Contacto en lista")
        return

print("Bienvenido al Sistema de Gestión de Contactos \n¿Qué acción desea realizar?")
while True:
    selection = input(" 1. Agregar Contacto \n 2. Buscar Contacto \n 3. Actualizar Contacto \n 4. Eliminar Contacto \n 5. Mostrar Contactos \n 6. Salir \nSeleccione una opción (1-6): ")
    if selection == '1':
        add_contact()
    elif selection == '2':
        search_contact()
    elif selection == '3':
        update_contact()
    elif selection == '4':
        delete_contact()
    elif selection == '6':
        print("Adios")
        break