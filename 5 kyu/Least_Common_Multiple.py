def gcd(a,b):
    if b == 0:
        return a
    return gcd(b, a % b)
def lcm_(a, b):
    return a * b / gcd(a, b)
def lcm(*args):
    if len(args) == 1:
        return args[0]   
    if len(args) == 2:
        return lcm_(args[0], args[1])
    l = lcm_(args[0], args[1])
    for i in range(2,len(args)):
        l = lcm(l, args[i])    
    return int(l)
