def DNA_strand(dna):
    # code here
    arr = list(dna)
    for i in range(len(arr)):
        if arr[i] == 'A':
           arr[i] = arr[i].replace('A','T')
        elif arr[i] == 'T':
           arr[i] = arr[i].replace('T','A')  
        elif arr[i] == 'G':
           arr[i] = arr[i].replace('G','C')  
        elif arr[i] == 'C':
           arr[i] = arr[i].replace('C','G')  
    return ''.join(arr)            
