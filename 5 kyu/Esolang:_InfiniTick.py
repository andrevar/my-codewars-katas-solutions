def interpreter(tape):
    pt = 0
    cell_pt = 0
    cell = [0]
    output = ''
    while True:
        if pt >= len(tape):
            pt = pt % len(tape)
        if tape[pt] == '>':
            cell_pt +=1
            if cell_pt == len(cell):
                cell.append(0)
        elif tape[pt] == '<':
            cell_pt -=1
            if cell_pt == -1:
                cell = [0] + cell
                cell_pt += 1
        elif tape[pt] == '+':
            cell[cell_pt] = (cell[cell_pt] + 1) % 256    
        elif tape[pt] == '-':
            cell[cell_pt] = (cell[cell_pt] - 1) % 256
        elif tape[pt] == '&':
            break
        elif tape[pt] == '/':
            if cell[cell_pt] == 0:
                pt +=1
        elif tape[pt] == '\\':
            if cell[cell_pt] != 0:
                pt +=1  
        elif tape[pt] == '*':
            output += chr(cell[cell_pt])
        pt +=1   
    return output            
