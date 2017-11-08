def sum_pairs(ints, s):
    o = {}
    for i in range(len(ints)):
        temp = ints[i]
        temp2 = s - temp
        if temp2 in o:
            return [temp2, temp]
        else:
            o[temp] = 1
    return None       
