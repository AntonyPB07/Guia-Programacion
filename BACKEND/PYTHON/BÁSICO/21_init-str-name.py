# *** __init__, __str__, __name__ ***

#! __init__ y __str__ son métodos especiales en Python que permiten definir el comportamiento de las clases.
#? __init__ ---> Se usa para inicializar un objeto de una clase. Es el constructor de la clase.
#? __str__ ---> Se usa para definir cómo se debe representar un objeto de una clase como una cadena de texto.

class person():
    def __init__ (self, name, age):
        self.name = name
        self.age = age
    def __str__ (self):
        return f"Hola soy {self.name} y tengo {self.age} años."
    
print(person('Antonio', 25))

#! __name__ Es una condición especial en Python que sirve para saber si un archivo se esta:
# ✅ Ejecutando directamente → __name__ vale "__main__"
# 📦 Importando como módulo → __name__ vale el nombre del archivo

def function():
    return print("Hola desde la función")

if __name__ == "__main__":
    function()

#? Sirve para:
#?   Para que un archivo ejecute código solo cuando se corre directamente
#?   Evita que ese código se ejecute si el archivo se importa desde otro
#?   Útil para probar funciones, scripts o automatizaciones sin afectar otros archivos

