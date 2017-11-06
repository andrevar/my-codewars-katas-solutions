def Descending_Order(num):
    arr = list(str(num))
    arr.sort(reverse=True)
    arr = int(''.join(arr))
    return arr
