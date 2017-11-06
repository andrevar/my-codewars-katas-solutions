import math
def sol_equa(n):
    arr = []
    for a in range(1, int(math.sqrt(n)) + 1):
            b = n / a
            x = (a + b)/2
            y = (b - a)/4
            if(x % 1 == 0 and y % 1 == 0):
                arr.append([int(x), int(y)])        
    return arr
    
