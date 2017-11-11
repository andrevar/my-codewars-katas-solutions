import math
def color_probability(color, texture):
    col = {'red':0,'yellow':1,'green':2,'smooth':0,'bumpy':1}
    text = {'smooth':3,'bumpy':7}
    arr = [[1,1,1],[4,2,1]]
    return str(math.floor(arr[col[texture]][col[color]] / text[texture] * 100) / 100)
