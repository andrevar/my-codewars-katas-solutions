def remove_smallest(numbers)
  if numbers.length == 0 || numbers.length == 1
      return []    
  end    
  numbers.delete_at(numbers.index(numbers.min))
  numbers
end
