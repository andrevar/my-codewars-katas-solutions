def find_even_index(arr):
    #your code here
    sum = 0;
    if arr.count(arr[0]) == len(arr):
        return 0
    for i in range(len(arr)):
        temp = 0
        for j in range(i + 1, len(arr)):
            temp += arr[j]
        if sum == temp:
            return i
        sum += arr[i]    
    return -1    
