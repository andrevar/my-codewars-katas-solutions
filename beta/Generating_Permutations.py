def permutations(l):
  arr = [['x' for i in range(len(l))]]
  for i in arr:
      if 'x' in i:
          for j in l:
              if j not in i:
                  temp = i[0:]
                  temp[i.index('x')] = j
                  arr.append(temp)
      else:
          yield i
