def sillycase(silly)
  if silly.length % 2 == 0 
      return silly[0,silly.length/2].downcase + (silly[silly.length/2,silly.length].upcase)
  else
      return silly[0,((silly.length - 1)/2 + 1)].downcase + (silly[((silly.length - 1)/2 + 1),silly.length].upcase)
  end    
end
