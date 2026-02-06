# * Solución del ejercicio.
# Instrucciones:
# Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
# Utiliza operaciones de inserción, borrado, actualización y ordenación.

telephones = []

types_contact = ("Family", "Friend", "Work","Emergency")

code_country = []

codes = []

schedule = []

# hacer que el campo nuevo aparezca en registros posteriores, validar campos

def add_contact():
    name = input("Ingresa el nombre del contacto: ").strip()
    if not name.isalpha():
        print("El nombre solo debe contener caracteres alfabéticos.")
        return
    
    telephone = input("Ingresa el telefono del contacto: ").strip()
    if not telephone.isdigit():
        print("El número de teléfono solo debe contener números.")
        return

    for i, type_key in enumerate(types_contact):
        print(f" {i + 1}. {type_key}")
    result_type = input(f"Selecciona una opción (1-4): ")
    type_selected = types_contact[int(result_type)-1]

    if not code_country:
        add_country()
    else:
        add_new_code = input("¿Desea agregar un nuevo código/país? (s/n): ").lower()
        if add_new_code == 's':
            add_country()
        else:
            for i, country_key in enumerate(code_country):
                print(f"{i + 1}. {country_key['country']}")
            result_country = input("Selecciona una opción: ")
            country_selected = code_country[int(result_country)-1]['country']
            telephone_complete = "+" + code_country[int(result_country)-1]['code'] + " " + telephone
    
    new_contact = {
        "name": name,
        "telephone": telephone_complete,
        "type": type_selected,
        "country": country_selected
    }
    
    schedule.append(new_contact)
    add_phone_number()

    print("¿Desea agregar un nuevo campo al contacto? (s/n)")
    result = input().lower()
    
    if result == 's':
        new_field = input("Ingrese el nombre del campo: ")
        new_value = input("Ingrese el valor del campo: ")
        schedule[new_field] = new_value
    elif result == 'n':
        print("No se agregó ningún otro campo")
        return
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
    return

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

def add_country():
    new_country = input("Nombre del país: ").strip()
    new_code = input(f"Código de {new_country}: ").strip()
    
    if not new_country.isalpha():
        print("El nombre solo debe contener caracteres alfabéticos.")
        return
    if not new_code.isdigit():
        print("El código solo debe contener caracteres numéricos.")
        return

    new_code_country = {
        "code": new_code,
        "country": new_country
    }
    code_country.append(new_code_country)
    codes.append(new_code)
    print("País y código agregado correctamente.")
    return

def add_phone_number():
    telephones.append(telephone_complete)
    return

def system():
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
        elif selection == '7':
            print("Telefonos:", telephones)
            print("Países y Códigos:", code_country)
            print("Códigos:", codes)
            print("Contacto Actual:", schedule)
            break
        
system()