def solver(arr):
    if arr[0] == min(arr) and arr[-1] == max(arr):
        return 'A'
    if arr[0] == max(arr) and arr[-1] == min(arr):
        return 'D'    
def solve(arr):
    count = 0
    while solver(arr) == None:
        arr = arr[1:] + [arr[0]]
        count += 1
    if count == 0:
        return solver(arr)
    return 'R' + solver(arr) 
