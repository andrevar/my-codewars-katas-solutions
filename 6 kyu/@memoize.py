def memoize(func):
    cache = {}
    def fib(*args):
        """Computes the nth number in the Fibonacci sequence"""
        if args in cache:
            return cache[args]
        else:
            cache[args] = func(*args)
            return cache[args]
    return fib        
