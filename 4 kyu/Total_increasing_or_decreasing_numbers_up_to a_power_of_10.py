def total_inc_dec(x):
    if x == 0:
        return 1
    if x == 1:
        return 10
    inc = []
    dec = []
    for i in range(1,11):
        inc.append(i)
        dec.append(i)
    for y in range(x - 1):
        for j in range(1, len(inc)):
            inc[j] += inc[j - 1]
            dec[j] += inc[j]
            
    return dec[len(dec) - 1] + inc[len(inc) - 1] - 10 * (x)
