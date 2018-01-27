def prime(n):
    if n == 2:
        return True
    if n%2 == 0:
        return False
    c = 3
    while c <= n**0.5:
        if n % c == 0:
            return False
        c += 2
    return True
def primes(n):
    if '2' in str(n):
        return True
    if '3' in str(n):
        return True    
    if '5' in str(n):
        return True
    if '7' in str(n):
        return True   
    return False    
def solve(n):
    c = 0
    d = 1
    arr = [1]
    while c <= n:
        d += 1
        if primes(d) == False and prime(d) == False:
            c += 1
            arr.append(d)
    return arr[n]
    
