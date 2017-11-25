def int_2_bin(num):
    if num  == 0:
        return '0'
    b = ''
    while num != 0:
        if num % 2 == 1:
            b = '1' + b
        if num % 2 == 0:
            b = '0' + b
        num = int(num/2)    
    return '0' + b 
