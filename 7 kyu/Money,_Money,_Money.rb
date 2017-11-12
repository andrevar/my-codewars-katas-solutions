def calculate_years(principal, interest, tax, desired)
  count = 0
  while principal < desired
      principal = principal*(1 + interest) - principal*interest*tax
      count += 1
  end
  count
end
