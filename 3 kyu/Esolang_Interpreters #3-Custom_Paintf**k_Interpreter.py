import numpy as np
def checkBracketL(string,index):
    for i in range(index,len(string) - 1):
        bCount = 0;
        if string[i] == '[':
            for j in range(i + 1,len(string)):
                if string[j] == '[':
                    bCount +=1
                if string[j] == ']':
                    if bCount == 0:
                        return j
                    else:
                        bCount -=1;
    return -1;
def checkBracketR(string,index):
    for i in range(index,0,-1):
        bCount = 0;
        if string[i] == ']':
            for j in range(i - 1,-1,-1):
                if string[j] == ']':
                    bCount +=1
                if string[j] == '[':
                    if bCount == 0:
                        return j
                    else:
                        bCount -=1;
    return -1;    
def interpreter(code, iterations, width, height):
    print(iterations)
    data = np.full((height, width),'0')
    if not code:
        return '\r\n'.join(list(map(lambda x: ''.join(x), data)))  
    codeP = 0
    data_x = 0
    data_y = 0
    while iterations > 0:
        if codeP >= len(code):
            break
        data_x = data_x % width
        data_y = data_y % height
        cmd = code[codeP]
        if cmd == 'n':
            data_y -=1
        elif cmd == 's':
            data_y +=1
        elif cmd == 'e':
            data_x +=1    
        elif cmd == 'w':
            data_x -=1
        elif cmd == '*':
            #data[data_y][data_x] = '1' if  data[data_y][data_x] == '0' else '1'    
            if data[data_y][data_x] == '0':
                data[data_y][data_x] = '1'
            else: 
                data[data_y][data_x] = '0'
        elif cmd == '[':
            if data[data_y][data_x] == '0':
                codeP = checkBracketL(code,codeP)
        elif cmd == ']':
            if data[data_y][data_x] != '0':
                codeP = checkBracketR(code,codeP)
        codeP +=1
        if cmd in 'nesw[]*':
            iterations -=1
    print(code)        
    return '\r\n'.join(list(map(lambda x: ''.join(x), data)))
