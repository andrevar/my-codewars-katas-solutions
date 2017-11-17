def interpreter(tape)
  cell = [0]
  pt = 0
  cell_pt = 0
  output = ''
  while pt < tape.length
      cmd = tape[pt]
      if cmd == '>'
          cell_pt +=1
          if cell_pt == cell.length
              cell += [0]
          end
      elsif cmd == '<'
          cell_pt -=1
          if cell_pt == -1
              cell = [0] + cell
              cell_pt +=1
          end
      elsif cmd == '*'
          output += cell[cell_pt].chr
      elsif cmd == '+'
          cell[cell_pt] = (cell[cell_pt] + 1) % 256
      elsif cmd == '-'
          cell[cell_pt] = (cell[cell_pt] - 1) % 256
      elsif cmd == '/'
          cell[cell_pt] = 0
      elsif cmd == '!'
          cell += [0]
      end
      pt +=1  
  end    
  output      
end
