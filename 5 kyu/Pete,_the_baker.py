import math
def cakes(recipe, available):
    arr = []
    for i in recipe:
        if i in available:
            arr.append(math.floor(available[i]/recipe[i]))
        else:
            return 0
    return min(arr)  
