def namelist(names):
    #your code here
    s = ''
    if len(names) == 0:
        return ''
    elif len(names) == 1:    
        return names[0]['name']
    for i in range(len(names) - 1):
        if i == len(names) - 2:
            s += str(names[i]['name']) + " & " + str(names[i + 1]['name'])
            return s
        s += str(names[i]['name']) + ', '
    return s
