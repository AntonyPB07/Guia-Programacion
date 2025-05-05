# Una variable de instancia es una propiedad cuya existencia depende de la creación de un objeto. 
# Cada objeto puede tener un conjunto diferente de variables de instancia.

# Una variable de instancia puede ser privada cuando su nombre comienza con __, pero no olvides que dicha propiedad 
# aún es accesible desde fuera de la clase usando un nombre modificado construido como < codel>_ClassName__PrivatePropertyName.

class Sample:
    gamma = 0 # Variable de clase.
    def __init__(self):
        self.alpha = 1 # Variable de instancia.
        self.__delta = 3 # Variable de instancia privada.


obj = Sample()
obj.beta = 2  # Otra variable de instancia (que existe solo dentro de la instancia "obj").
print(obj.__dict__)