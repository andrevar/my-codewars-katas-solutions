def count_feelings(s, arr):
    c = 0
    for i in arr:
        t = 0
        for j in i:
            if s.count(j) < i.count(j):
                t = 1
        if t == 0:
            c += 1
    if c == 1:
        return '1 feeling.'
    return str(c) + ' feelings.'  
