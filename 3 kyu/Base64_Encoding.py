from numpy import binary_repr as bn
cset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
def to_base_64(string):
    string = list(string)
    enc = ''
    for i in range(len(string)):
        string[i] = bn(ord(string[i]))
        while len(string[i]) < 8:
            string[i] = '0' + string[i]
    string = ''.join(string)
    while len(string) % 6 != 0:
        string += '0'
    for j in range(0,len(string), 6):
        enc += cset[int(string[j:j+6],2)]   
    return enc
    
def from_base_64(string):
    string = list(string)
    dec = ''
    for i in range(len(string)):
        string[i] = bn(cset.index(string[i]))
        while len(string[i]) < 6:
            string[i] = '0' + string[i]
    string = ''.join(string)
    while len(string) % 8 != 0:
        string += '0' 
    for j in range(0,len(string), 8):
        dec += chr(int(string[j:j+8],2))    
    return dec.replace('\x00','')    
