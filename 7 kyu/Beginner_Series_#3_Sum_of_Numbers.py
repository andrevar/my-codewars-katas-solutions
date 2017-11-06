def get_sum(a,b):
    if a > b:
        t = a
        a = b
        b = t
    return sum(list(range(a, b + 1)))
