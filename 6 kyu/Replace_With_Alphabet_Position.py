def alphabet_position(text):
    s = '';
    for i in text.lower():
        if ord(i) - 96 > 0:
           s += str(ord(i) - 96) + ' '    
        else:
           s += ''
    return s.rstrip()
