import string
from codecs import encode as _dont_use_this_

def rot13(message):
    alph = string.ascii_lowercase + string.ascii_uppercase 
    key = alph[13:26] + alph[:13] + alph[39:] + alph[26:39]
    tab = string.maketrans(alph, key)
    return message.translate(tab)
