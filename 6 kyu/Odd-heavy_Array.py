def isOddHeavy(arr):
    arr_odd = list(filter(lambda x: x%2 == 1, arr))
    arr_even = list(filter(lambda x: x%2 == 0, arr))
    if not arr_odd:
        return False
    for j in arr_odd:
         if any(y >= j for y in arr_even):
             return False
    return True
