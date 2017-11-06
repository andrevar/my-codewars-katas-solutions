def create_phone_number(n):
    s = []
    for i in n:
        s.append(str(i))
    s.insert(0, '(')
    s.insert(4, ') ')
    s.insert(8, '-')
    return ''.join(s)
