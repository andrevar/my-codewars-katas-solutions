def shortest_arrang(n):
    arr = []
    for i in range(n+1,0,-1):
        temp = [i]
        for j in range(i-1,0,-1):
            temp.append(j)
            if sum(temp) == n:
                return temp
    return [-1]
