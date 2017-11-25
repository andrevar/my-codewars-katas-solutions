def capitalize(s):
    arr = ['','']
    for i in range(len(s)):
        if i % 2 == 0:
            arr[0] += s[i].upper()
            arr[1] += s[i].lower()
        else:
            arr[0] += s[i].lower()
            arr[1] += s[i].upper()
    return arr  
