def comprobacion(num):
    # número primo
    primo = [1,5]
    for numPrimo in primo:
        primo += (num - 1) + (num - 2)
        print(primo)