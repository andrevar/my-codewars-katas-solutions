def find_missing(sequence):
    iv = []
    for i in range(1,len(sequence)):
        iv.append(sequence[i] - sequence[i - 1])
    if min(iv) < 0:
        a = list(range(max(sequence),min(sequence) - 1,max(iv)))
    else: 
        a = list(range(min(sequence),max(sequence) + 1,min(iv)))
    return list(set(a) - set(sequence))[0]
