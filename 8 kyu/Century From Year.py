def century(year):
    cen = year / 100
    if int(cen) == cen:
        return cen
    return int(cen) + 1
