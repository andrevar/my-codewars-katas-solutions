def expanded_form(num)
  arr = num.to_s.split(//).reverse
  for i in 0..arr.length - 1 do
      arr[i] = arr[i].to_i * 10**(i)
  end    
  return (arr.reverse - [0]).join(' + ')
end
