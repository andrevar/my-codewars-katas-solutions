digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
def factorial(n):
    if n == 0:
        return 1
    return n*factorial(n-1)    
def dec2FactString(nb):
  res = ''
  c = 1
  while nb > 0:
      res += digits[nb%c]
      nb /= c
      c +=1
  return res[::-1]    
def factString2Dec(string):
  res = 0
  string = string[::-1]
  for i in range(len(string)):
      res += digits.index(string[i])*factorial(i)
  return res
