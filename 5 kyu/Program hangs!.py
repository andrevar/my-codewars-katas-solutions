import signal
def wrap_mystery(n):
    def signal_handler(signum, frame):
        raise TimeoutError()
    signal.signal(signal.SIGALRM, signal_handler)
    signal.setitimer(signal.ITIMER_REAL, 0.1)
    try:
        res =  mystery(n)
    except TimeoutError as exc:
        res = -1
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)
    return res
