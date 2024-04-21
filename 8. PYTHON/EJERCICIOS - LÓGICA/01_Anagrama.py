def anagrama(palabra1, palabra2):
    if len(palabra1) != len(palabra2):
        return False
    cadena1 = sorted(palabra1)
    cadena2 = sorted(palabra2)
    if cadena1 == cadena2:
       return True
    else:
        return False

print(anagrama('andrea', 'endrae'))