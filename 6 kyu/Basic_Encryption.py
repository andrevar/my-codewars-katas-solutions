def encrypt(text, rule):
    return ''.join(list(map(lambda x: chr((ord(x) + rule)%256), list(text))))
