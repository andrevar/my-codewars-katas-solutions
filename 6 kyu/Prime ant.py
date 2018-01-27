def prime_test(n):
    if n == 2:
        return True
    if n%2 == 0:
        return False
    i = 3
    m = n**0.5
    while i <= m:
        if n%i == 0:
            return False
        i += 2
    return True    
def prime_ant(n):
    p = 0
    c = 0
    arr = list(range(2,n*2))
    pos = []
    while True:
        pos.append(p)
        if c == n:
            return pos[n]
        q = prime_test(arr[p])
        if q == True:
            p += 1
        else:
            num = 2
            while True:
                if arr[p]%num == 0:
                    arr[p] = int(arr[p]/num)
                    arr[p-1] += num
                    p -= 1
                    break
                num += 1
        c += 1
    return pos[c]        
