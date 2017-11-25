import re
def shortener(message):
    if len(message) <= 160: return message
    if ' ' not in message: return message
    m = message[:message.rindex(' ')]
    n = list(message[message.rindex(' ') + 1:])
    n[0] = n[0].upper()
    m = m + ''.join(n)
    if len(m) > 160: return shortener(m)
    return m
