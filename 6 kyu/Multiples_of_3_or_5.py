def solution(number):
    num = [];
    sum = 0
    for n in range(number):
        if n % 3 == 0:
            num.append(n);
            continue
        elif n % 5 == 0:
            num.append(n);
            continue
        else:
            continue
    for i in num:
        sum = sum + i
    return sum    
