def solve(s):
    if s[::-1] == s:
        return 'OK'
    for i in range(len(s)):
        t = s[:i] + s[i+1:]
        if t == t[::-1]:
            return 'remove one'
    return 'not possible'     
