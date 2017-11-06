import math
def is_square(n):
    if n < 0:
        return False
    return n % math.sqrt(n) == 0
