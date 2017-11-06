def digital_root(n):
    # ...
    sum = 0;
    if n > 9:
        while(n > 0):
            sum += int(n % 10)
            n = int(n/10)
        return digital_root(sum)
    else:  
        return n
    
