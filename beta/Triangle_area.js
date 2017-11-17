def t_area(t_str):
    t_str = list(filter(lambda x: x != '', t_str.split('\n')))[::-1]
    return float((len(t_str) - 1))*float((t_str[0].count('.') - 1))/2
