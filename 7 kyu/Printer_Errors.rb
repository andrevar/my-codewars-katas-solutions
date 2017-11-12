def printer_error(s)
	colors = 'abcdefghijklm'
  count = 0
  s.each_char { |c| unless colors.include? c then count += 1 end }
  return "#{count}/#{s.length}"
end
