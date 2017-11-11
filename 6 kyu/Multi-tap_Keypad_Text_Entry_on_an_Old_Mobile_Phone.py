def presses(phrase):
    pad = ['1','ABC2','DEF3','GHI4','JKL5','MNO6',
          'PQRS7','TUV8','WXYZ9','*',' 0','#']
    sum = 0
    for i in phrase.upper():
        for j in pad:
             if i in j:
                 sum += j.index(i) + 1
                 break
    return sum           
