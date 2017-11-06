def duplicate_count(text):
    # Your code goes here
    l = []
    t = list(text.lower())
    for i in t:
        if t.count(i) > 1:
            if i in l:
                continue
            else:
                l.append(i)
    return len(l)       
