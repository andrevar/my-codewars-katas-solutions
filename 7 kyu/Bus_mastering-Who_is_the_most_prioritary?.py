def arbitrate(input, n):
    s = ''
    for i in input:
        if i == '1':
            s += i
            break
        s += i
    while len(s) < n:
        s += '0'
    return s   
