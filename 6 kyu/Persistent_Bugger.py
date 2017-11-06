def persistence(n):
    if n < 10:
        return 0
    def func(x, c):
        s = 1;
        for i in str(x):
            s *= int(i)
        c += 1    
        if s > 9:
            return func(s, c)
        return c    
    return func(n, 0)        
