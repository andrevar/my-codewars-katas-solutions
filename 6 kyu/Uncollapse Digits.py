def uncollapse(digits):
    num = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for i in num:
        digits = digits.replace(i, i + ' ')
    return digits.strip()
