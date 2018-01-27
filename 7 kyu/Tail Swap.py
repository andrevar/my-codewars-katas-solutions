def tail_swap(strings):
    strings = list(map(lambda x: x.split(':'),strings))
    return [strings[0][0] + ':' + strings[1][1],strings[1][0] + ':' + strings[0][1]]
