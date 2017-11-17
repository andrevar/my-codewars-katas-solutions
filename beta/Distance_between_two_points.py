def distance(p1, p2):
    if not p1 or not p2 or len(p1) != len(p2):
        return -1 
    dis = 0
    for i in range(len(p1)):
        dis += (p1[i] - p2[i])**2
    return dis**0.5
