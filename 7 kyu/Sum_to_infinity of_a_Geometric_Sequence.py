def sum_to_infinity(sequence):
    if sequence[1]/sequence[0] >= 1 or sequence[1]/sequence[0] <= -1: return "No Solutions"
    s = sequence[0]/(1 - (sequence[1]/sequence[0]))
    if s % 1 == 0:
        return s   
    return float(format(sequence[0]/(1 - (sequence[1]/sequence[0])), '.3f'))
