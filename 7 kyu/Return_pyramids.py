def pyramid(n):
    s = ''
    for i in range(n-1):
        s += ' '*(n-1-i) + '/' + ' '*i*2 + '\\' + '\n'     
    return s + '/' + '_'*(2*n - 2) + '\\' + '\n'
