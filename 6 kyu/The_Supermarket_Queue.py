def queue_time(customers, n):
  from functools import reduce
  arr = []
  if len(customers) == 0:
      return 0
  elif len(customers) == 1:
      return customers[0]
  elif n >= len(customers):
      return max(customers)
  for i in range(n):
       arr.append(customers[i])
  for j in range(n,len(customers)):
       arr.sort()
       arr[0] += customers[j]
  return max(arr)
