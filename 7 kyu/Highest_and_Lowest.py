def high_and_low(numbers):
    # ...
    arr = numbers.split(' ')
    arr = list(map(lambda x: int(x), arr))
    return str(max(arr)) + ' ' + str(min(arr))
