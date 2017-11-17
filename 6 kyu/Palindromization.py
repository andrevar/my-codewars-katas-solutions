def palindromization(elements, n):
  if len(elements) == 0 or n < 2:
      return 'Error!'
  a = str(elements*(int(n)))[:int(n/2)]
  if n % 2 == 1:
      return str(elements*(int(n)))[:int(n/2) + 1] + a[::-1]  
  return a + a[::-1]
