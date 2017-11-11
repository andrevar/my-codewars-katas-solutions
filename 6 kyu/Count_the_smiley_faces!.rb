def count_smileys(arr)
  s = [':)',':D',':-)',':-D',':~)',':~D',';)',';D',';-)',';-D',';~)',';~D']
  return arr.length - (arr - s).length
end
