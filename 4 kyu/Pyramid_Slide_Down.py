def longest_slide_down(pyramid):
    for j in range(len(pyramid) - 1, 0, -1):
        temp = []
        for i in range(1,len(pyramid[j])):
            temp.append(max(pyramid[j][i -1],pyramid[j][i]) )
        for x in range(len(temp)):
            pyramid[j - 1][x] += temp[x] 
    return pyramid[0][0]
