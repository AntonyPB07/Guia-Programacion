import secrets
import string

def generar_contrasena(longitud):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    # Excluir caracteres ambiguos para evitar confusiones
    caracteres = ''.join(c for c in caracteres if c not in 'lIoO01')
    contrasena = ''.join(secrets.choice(caracteres) for _ in range(longitud))
    return contrasena

def main():
    try:
        longitud = int(input("Ingrese la longitud deseada para la contraseña: "))
        if longitud <= 0:
            print("La longitud de la contraseña debe ser un número positivo.")
            return
        contrasena = generar_contrasena(longitud)
        print("Contraseña generada:", contrasena)
    except ValueError:
        print("Por favor, ingrese un número entero válido para la longitud.")
main()
