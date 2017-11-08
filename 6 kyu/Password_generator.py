import string
import random
def password_gen():
    str_lo = list(string.ascii_lowercase)
    str_up = list(string.ascii_uppercase)
    str_d = list(string.digits) 
    str_f = str_lo + str_up + str_d
    random.shuffle(str_lo)
    random.shuffle(str_up)
    random.shuffle(str_d)
    random.shuffle(str_f)
    password = str_f[:int(random.random()* 15)]
    t = str_lo[:2] + str_up[:3] + str_d[:1]
    random.shuffle(t)
    return ''.join(password + t)
