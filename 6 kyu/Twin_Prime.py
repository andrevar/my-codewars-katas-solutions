def prime(n):
    if n == 2:
        return True
    if n == 3: 
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i*i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i +=6
    return True    
def is_twinprime(n):
    if prime(n) and (prime(n + 2) or prime(n - 2)):
        return True
    return False
