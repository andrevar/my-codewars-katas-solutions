def solve(a):
    even = 0
    odd = 0
    for i in a:
        if type(i) is int:
            if i % 2 == 0:
                even += 1
            if i % 2 == 1:
                odd += 1
    return even - odd    
