def hundreds(n):
    arr = []
    h_count = 0
    d_count = 0
    while n > 99:
        n -= 100
        h_count += 1
    arr.append(h_count)
    if n < 20: 
        arr.append(0)
        arr.append(n)
        return arr
    while n > 9:
        n -= 10
        d_count += 1
    arr.append(d_count*10)
    arr.append(n)
    return arr
def number2words(n):
    if n == 0:
        return 'zero'
    num = { '1':'one','2':'two','3':'three','4':'four',
            '5':'five','6':'six','7':'seven','8':'eight','9':'nine',
            '10':'ten','11':'eleven','12':'twelve','13':'thirteen',
            '14':'fourteen','15':'fifteen','16':'sixteen','17':'seventeen',
            '18':'eighteen','19':'nineteen','20':'twenty','30':'thirty',
            '40':'forty','50':'fifty','60':'sixty','70':'seventy','80':'eighty',
            '90':'ninety','100':'hundred'}
    t_count = 0
    sum = ''
    while n > 999:
        n -= 1000
        t_count += 1
    t_arr = hundreds(t_count)
    h_arr = hundreds(n)
    arr = t_arr + h_arr 
    if arr[0] != 0:
        sum += num[str(arr[0])] + ' hundred '
    if arr[1] != 0 and arr[2] != 0:
        sum += num[str(arr[1])] + '-' + num[str(arr[2])]
        arr[2] = 0
    elif arr[1] != 0:
        sum += num[str(arr[1])]
    if arr[2] != 0:
        sum += num[str(arr[2])]
    if t_count > 0:
        sum += ' thousand '
    if arr[3] != 0:
        sum += num[str(arr[3])] + ' hundred '    
    if arr[4] != 0 and arr[5] != 0:
        sum += num[str(arr[4])] + '-' + num[str(arr[5])]
        arr[5] = 0
    elif arr[4] != 0:
        sum += num[str(arr[4])]
    if arr[5] != 0:
        sum += num[str(arr[5])]    
    return sum.strip()
