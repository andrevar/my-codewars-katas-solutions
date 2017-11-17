def generateHashtag(str)
  if str == ''
      return false
  end    
  str = '#' + str.split(' ').map { |i| i.to_s.capitalize } .join()
  if str.length > 140
      return false
  end    
  str
end
