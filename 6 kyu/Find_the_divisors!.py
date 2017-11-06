def divisors(integer):
    n = []
    for i in range(2, integer - 1):
        if (integer % i == 0): 
            n.append(i)
    if len(n) == 0:
        return str(integer) + ' is prime'
        
    return n
    
