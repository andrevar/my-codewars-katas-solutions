def unique_in_order(iterable):
    order = []
    if len(iterable) == 0:
        return []
    elif iterable.count(iterable[0]) == len(iterable):
        return [iterable[0]]
    for i in range(len(iterable)):
        if iterable[i] != iterable[i - 1]: 
            order.append(iterable[i])
    return order
