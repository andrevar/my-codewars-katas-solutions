def square_digits(num):
    arr = list(str(num))
    return int(''.join(list(map(lambda x: str(int(x)**2), arr))))
