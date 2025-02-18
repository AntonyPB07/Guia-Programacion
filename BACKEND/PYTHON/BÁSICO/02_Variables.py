# *** VARIABLES ***
# En Python no suele usarse Camel Case (miVariable, numeroPrimo), si no se usa Snake Case (mi_variable, numero_primo).

nombre = 'Anthony'  # String

edad = 24           # Number

años_nacido = 24.9  # Float

casado = False      # Boolean

# str es para convertir algo a string, en este caso se convirtio de número a texto.
numero_convertido_string = 69
num_string = str(numero_convertido_string)
print(num_string)
print(type(num_string))

# *** RESUMEN ***
first_name = 'Anthony'
last_name = 'Pérez'
country = 'México'
city = 'CDMX'
age = 24
is_married = False
skills = ['HTML', 'CSS', 'JS', 'Python', 'Git']
person_info = {
    'firstname':'Luis',
    'lastname':'Becerra',
    'country':'México',
    'city':'Edo Mex'
    }

print('First name:', first_name)
print('First name length:', len(first_name))
print('Last name: ', last_name)
print('Last name length: ', len(last_name))
print('Country: ', country)
print('City: ', city)
print('Age: ', age)
print('Married: ', is_married)
print('Skills: ', skills)
print('Person information: ', person_info)