def find_missing_letter(arr)
  a = (arr[0]..arr[arr.length - 1]).to_a - arr
  return a[0]
end
