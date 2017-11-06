def getCount(inputStr):
    import re
    num_vowels = 0
    # your code here
    for i in inputStr:
        if bool(re.match("[aeiou]",i)):
             num_vowels += 1   
    return num_vowels
