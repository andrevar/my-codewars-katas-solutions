def lcs(x, y):
    X = list(x)
    Y = list(y)
    c = ''
    Y = list(filter(lambda i: i in X, Y))
    def diff(X,Y,c):
        if len(X) > 0 and len(Y) > 0 and X[len(X) - 1] == Y[len(Y) - 1]:
            c = X.pop() + c
            Y.pop()
            return diff(X,Y,c)
        elif (len(Y) > 0 and (len(X) == 0 or len(Y)>= len(X))):
            Y.pop()
            return diff(X,Y,c)
        elif (len(X) > 0 and (len(Y) == 0 or len(X)>= len(Y))):
            X.pop()
            return diff(X,Y,c)
        else:    
            return c
    return diff(X,Y,c)  
