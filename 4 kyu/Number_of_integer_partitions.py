from functools import update_wrapper
def memoize(func):
    cache = {}
    def memoizer(arg):
        if arg in cache:
            return cache[arg]
        else:
            cache[arg] = result = func(arg)
            return result
    return update_wrapper(memoizer, func)
@memoize
def partitions(n):
    count = 0
    if n == 0:
        count += 1
    else:
        x = 1
        while (n >= (x * (3 * x - 1) // 2)) or (n >= (x * (3 * x + 1) // 2)):
            i = (x * (3 * x - 1) // 2)
            j = (x * (3 * x + 1) // 2)
            if (n - i) >= 0:
                count -= ((-1) ** x) * partitions(n - i)
            if (n - j) >= 0:
                count -= ((-1) ** x) * partitions(n - j)
            x += 1
    return count
