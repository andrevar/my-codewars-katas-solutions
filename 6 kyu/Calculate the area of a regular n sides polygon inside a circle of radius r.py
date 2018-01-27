import math
def area_of_polygon_inside_circle(r, n):
    return float("{:.3f}".format((math.sin(2*math.pi/n)*r*r*n)/2))
