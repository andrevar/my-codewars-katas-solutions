def solve(a,b):
    for j in b:
        if j in b and a.count(j) < b.count(j):
            return 0
    for i in b:
        a = a.replace(i, '', 1)
    return len(a)  
