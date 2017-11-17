import string
def rot13(message):
    alph = string.ascii_letters
    key = alph[13:26] + alph[0:13] + alph[39:] + alph[26:39]
    tab = str.maketrans(alph,key)
    return message.translate(tab)
