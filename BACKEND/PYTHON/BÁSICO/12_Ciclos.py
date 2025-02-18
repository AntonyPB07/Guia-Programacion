# *** CICLOS ***

# *** while ***
numeros_pares = 0
while numeros_pares <= 10:
    print(numeros_pares)
    numeros_pares = numeros_pares + 2
    # numeros_pares += 2 es igual a numeros_pares = numeros_pares + 2

# *** while else ***
edad = 3
while edad <= 18:
    print(edad)
    edad = edad + 1
    # edad += 2 es igual a edad = edad + 2
else:
    print('Ya es mayor a 18')

# *** break ***
count = 0
while count < 5:
    print(count)
    count = count + 1
    if count == 3:
        break

# *** continue ***
count2 = 0
while count2 < 5:
    if count2 == 3:
        count2 = count2 + 1
        continue
    print(count2)
    count2 = count2 + 1

# *** for ***
lista = [2,4,9,21,13,16,31,48,61]
for numeros in lista:
    print(numeros)

# for string
lenguaje = 'Python'
for i in range(len(lenguaje)):
    print(lenguaje[i])

# for tupla
numbers = (0, 1, 2, 3, 4, 5)
for number in numbers:
    print(number)

# for diccionario
person = {
    'first_name':'Asabeneh',
    'last_name':'Yetayeh',
    'age':250,
    'country':'Finland',
    'is_marred':True,
    'skills':['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address':{
        'street':'Space street',
        'zipcode':'02210'
    }
}
for key in person:
    print(key)
for key, value in person.items():
    print(key, value) # this way we get both keys and values printed out

# for set
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
for company in it_companies:
    print(company)

# for break
numbers = (0,1,2,3,4,5)
for number in numbers:
    print(number)
    if number == 3:
        break

# for continue
numbers = (0,1,2,3,4,5)
for number in numbers:
    print(number)
    if number == 3:
        continue
    print('Next number should be ', number + 1) if number != 5 else print("loop's end") # for short hand conditions need both if and else statements
print('outside the loop')

# *** for else ***
for number in range(11):
    print(number)   # prints 0 to 10, not including 11
else:
    print('The loop stops at', number)

# *** FUNCIÓN RANGE ***
# syntax: for iterator in range(start, end, step):
# La función range() se utiliza como lista de números. El rango (inicio, fin, paso) toma tres parámetros: inicio, finalización e incremento.
# De forma predeterminada, comienza desde 0 y el incremento es 1. La secuencia de rangos necesita al menos 1 argumento (end). Creación de secuencias mediante rango.
lst = list(range(11))
print(lst) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
st = set(range(1, 11))    # 2 arguments indicate start and end of the sequence, step set to default 1
print(st) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

lst = list(range(0,11,2))
print(lst) # [0, 2, 4, 6, 8, 10]
st = set(range(0,11,2))
print(st) #  {0, 2, 4, 6, 8, 10}

# *** for dentro de otro for ***
person = {
    'first_name': 'Asabeneh',
    'last_name': 'Yetayeh',
    'age': 250,
    'country': 'Finland',
    'is_marred': True,
    'skills': ['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address': {
        'street': 'Space street',
        'zipcode': '02210'
    }
}
for key in person:
    if key == 'skills':
        for skill in person['skills']:
            print(skill)