def fracs(fraction):
    fracs = {1:'.', 2:':', 3:':.', 4:'::', 5:':.:', 6:'S', 7:'S.', 8:'S:',
             9:'S:.', 10:'S::', 11:'S:.:'}
    return fracs[fraction]         
def roman_numeral(integer):
    roman = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
                6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX',
                30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX',
                90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D',
                600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M',
                2000: 'MM', 3000: 'MMM', 4000:'MMMM', 5000:'MMMMM'}
    t = 0
    while integer > 999:
        integer -= 1000
        t += 1000
    h = 0    
    while integer > 99:
        integer -= 100
        h += 100 
    d = 0
    while integer > 9:
        integer -= 10
        d += 10
    arr = [t,h,d,integer]
    num = ''
    for i in range(4):
        if arr[i] != 0:
            num += roman[arr[i]]
    return num 
def roman_fractions(integer, fraction=None):
    if integer > 5000:
        return 'NaR'
    if fraction:
        if fraction < 0 or fraction > 11:
            return 'NaR'
        if integer < 0:
            return 'NaR'
        return  roman_numeral(integer) + fracs(fraction)  
    else:
        if integer == 0:
            return 'N'
        if integer < 0:
            return 'NaR'    
        return  roman_numeral(integer)   
        
