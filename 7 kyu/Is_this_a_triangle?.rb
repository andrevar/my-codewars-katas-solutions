def isTriangle(a,b,c)
   arr = [a, b, c].sort
   return arr[2] < arr[0] + arr[1]
end
