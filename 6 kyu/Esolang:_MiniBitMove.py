def interpreter(tape, array):
    selector = 0
    pt = 0
    array = list(array)
    while selector < len(array):
        if tape[pt] == '1':
            if array[selector] == '1':
                array[selector] = '0'
            else:
                array[selector] = '1'
        if tape[pt] == '0':
            selector += 1
        pt = (pt + 1) % len(tape)
    return ''.join(array)    
