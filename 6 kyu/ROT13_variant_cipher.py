import string
def encrypter(strng):
    alph = string.ascii_lowercase
    key = alph[13:] + alph[0:13]
    tab = str.maketrans(alph,key)
    tab2 = str.maketrans(alph,alph[::-1])
    strng = strng.translate(tab)
    return strng.translate(tab2)
