def solve(arr)
  arr.each { |x| if !arr.include?(-1*x)
                     return x
                 end
           }
end
