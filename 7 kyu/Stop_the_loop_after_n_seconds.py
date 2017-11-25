import time
def increment_loop(n):
    start = time.time()
    i = 0
    while time.time() - start < n:
        i +=1
    return i
