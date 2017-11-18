class HighScoreTable:
    
    def __init__(self,max):
        self.max = max
        self.scores = []
    
    def update(self, score):
        if len(self.scores) < self.max:
            self.scores.append(score)
            self.scores.sort(reverse=True)
        elif len(self.scores) == self.max and score > min(self.scores):
            self.scores.pop()
            self.scores.append(score)
            self.scores.sort(reverse=True)
            
    def reset(self):
        self.scores = []
        
