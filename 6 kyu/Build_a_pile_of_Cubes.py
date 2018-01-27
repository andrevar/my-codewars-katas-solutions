def find_nb(m):
    c = 1
    while m > 0:
        m -= c*c*c
        c += 1
    return c - 1 if m == 0 else -1   
