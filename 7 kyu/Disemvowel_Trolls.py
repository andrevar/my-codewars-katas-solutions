def disemvowel(string):
    vowels = ['a','e','i','o','u','A','E','I','O','U']
    for i in vowels:
        string = string.replace(i, '')
    return string
