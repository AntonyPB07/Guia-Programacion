# *** DATES ***
from datetime import datetime
from datetime import date
from datetime import time
from datetime import timedelta

def my_date_time():
    año_predefinido = datetime(1999,7,25)
    now = datetime.now()
    day = now.day
    month = now.month
    year = now.year
    minute = now.minute
    second = now.second
    timestamp = now.timestamp() # timestamp es la representación numérica del tiempo desde el 1 de enero de 1970 hasta la fecha actual
    return (f'Fecha predefinida: {año_predefinido},\nFecha y hora actual: {now},\nDía: {day},\nMes: {month},\nAño: {year}\nMinutos: {minute},'
            f'\nSegundos: {second},\nTimestamp: {timestamp}\n')
print(my_date_time())

def my_date_time2():
    now = datetime.now()
    t = now.strftime("%H:%M:%S") # Para ver más opcione, ir al archivo strfTime.
    time1 = ("time:", t)
    time_one = now.strftime("%m/%d/%Y, %H:%M:%S")
    time2 = ("time one:", time_one)
    time_two = now.strftime("%d/%m/%Y, %H:%M:%S")
    time3 = ("time two:", time_two)
    return f'{time1}\n{time2},\n{time3}\n'
print(my_date_time2())

def my_date():
    new_date = date(1916,10,16)
    print(new_date)
    print('Current date: ',new_date.today())
    today = date.today()
    print("Current year:", today.year)
    print("Current month:", today.month)
    print("Current day:", today.day, '\n')
my_date()

def my_time():
    # time(hour = 0, minute = 0, second = 0)
    a = time()
    print("Tiempo indefinido =", a)
    # time(hour, minute and second)
    b = time(10, 30, 50)
    print("Tiempo definido =", b)
    # time(hour, minute and second)
    c = time(hour=10, minute=30, second=50)
    print("Tiempo definido otra esctructura =", c)
    # time(hour, minute, second, microsecond)
    d = time(10, 30, 50, 200555)
    print("Tiempo definido con microsegundos =", d, '\n')
my_time()

def my_timedelta():
    t1 = timedelta(weeks=12, days=10, hours=4, seconds=20)
    t2 = timedelta(days=7, hours=5, minutes=3, seconds=30)
    t3 = t1 - t2
    print("t3 =", t3)
my_timedelta()