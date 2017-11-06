def chess_board_cell_color(cell1, cell2):
  if (int(ord(cell1[0])) - int(ord(cell2[0]))) % 2 == 0 and (int(cell1[1]) + int(cell2[1])) % 2 == 0:
           return True
  if (int(ord(cell1[0])) - int(ord(cell2[0]))) % 2 == 1 and (int(cell1[1]) + int(cell2[1])) % 2 == 1:
           return True
  else:
        return False
