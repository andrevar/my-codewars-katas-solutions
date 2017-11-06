def accum(s):
    # your code
    s = s.lower()
    s = list(s)
    str = ''
    for i in range(len(s)):
        str += s[i].upper()
        for j in range(i):
            str += s[i]
        if i != len(s) - 1:
            str += '-'
    return str
