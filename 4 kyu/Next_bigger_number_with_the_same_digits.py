def next_bigger(n):
    print(n)
    n = str(n)
    n1 = ''
    n2 = ''
    for i in range(len(n)-1,0,-1):
        if n[i] > n[i-1]:
            n1 = n[:i]
            n2 = n[i:]
            break
    ns = sorted(list(n2))
    n3 = []
    for j in range(len(ns)):
        if ns[j] > n1[len(n1)-1]:
            n1 = list(n1)
            t = n1.pop()
            n3.append(ns[j])
            ns = ns[:j] + [t] + ns[j+1:]
            n1 += n3 + ns
            break
    if ''.join(n1) == '':
        return -1
    return int(''.join(n1))       
