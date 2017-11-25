def first_non_repeated(s):
    for i in s:
        if s.count(i) == 1:
            return i
