import re
def eliminate_set_bits(string):
    if not string: return 0
    if re.search('0',string):
        return int(string.replace('0',''),2)
    return int(string,2)    
