def find_short(s):
    return min(map(lambda x: len(x), s.split(' ')))
