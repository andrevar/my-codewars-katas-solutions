def factorize(num):
    fact = []
    for i in range(2,num + 1):
        while num % i == 0:
            fact.append(i)
            num /= i
    return fact if len(fact) else [0]
