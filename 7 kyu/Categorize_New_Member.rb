def openOrSenior(data)
  data.map { |i| i[0] >= 55 && i[1] > 7 ? 'Senior': 'Open'}    
end
