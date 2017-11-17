def map(function, iterable):
    arr = []
    for i in range(len(iterable)):
        arr.append(function(iterable[i]))
    return arr   
