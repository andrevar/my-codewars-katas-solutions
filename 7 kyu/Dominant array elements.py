def solve(arr):
    print(arr)
    res = []
    for i in range(len(arr)-1):
        if arr[i] > max(arr[i+1:]):
            res.append(arr[i])
    res.append(arr[-1])        
    return res
    
