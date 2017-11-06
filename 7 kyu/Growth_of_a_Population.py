def nb_year(p0, percent, aug, p):
    c = 0
    while p0 < p:
        p0 += p0 * (percent / 100) + aug
        c += 1
    return c    
