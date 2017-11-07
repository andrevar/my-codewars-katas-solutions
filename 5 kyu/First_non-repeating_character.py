def first_non_repeating_letter(string):    
    strng = list(string.lower())
    for i in range(len(string)):
        if strng.count(strng[i]) == 1:
            return string[i]
    return ''     
