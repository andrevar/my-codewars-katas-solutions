def prime_factors (n):
    fact = []
    for i in range(2,n + 1):
        while n % i == 0:
            fact.append(i)
            n /= i
    return fact
