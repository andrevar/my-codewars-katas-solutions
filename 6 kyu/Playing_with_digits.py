def dig_pow(n, p):
    # your code
    s = str(n)
    d = 0
    count = p
    for i in s:
        d += int(i)**count
        count += 1
    if d % n == 0:
        return d / n
    return -1
