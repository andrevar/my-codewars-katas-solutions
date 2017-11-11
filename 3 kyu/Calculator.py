import re
class Calculator(object):
  def evaluate(self, string):
    self.string = string
    print(string)
    while re.search('\d+(\.\d+)?(\s[*/]\s\d+(\.\d+)?)', self.string):
        p = re.search('\d+(\.\d+)?(\s[*/]\s\d+(\.\d+)?)', self.string).group(0)
        if re.search('\*', p):
            m = p.split(' * ')
            m = float(m[0]) * float(m[1])
            self.string = self.string.replace(p, str(m))   
        elif re.search('/', p):
            d = p.split(' / ')
            d = float(d[0]) / float(d[1])
            self.string = self.string.replace(p, str(d))   
    while re.search('(\-)?\d+(\.\d+)?(\s[+-]\s\d+(\.\d+)?)', self.string):
        f = re.search('(\-)?\d+(\.\d+)?(\s[+-]\s\d+(\.\d+)?)', self.string).group(0)
        if re.search('\+', f):
            a = f.split(' + ')
            a = float(a[0]) + float(a[1])
            self.string = self.string.replace(f, str(a))   
        elif re.search('\-', f):
            s = f.split(' - ')
            s = float(s[0]) - float(s[1])
            self.string = self.string.replace(f, str(s))
    if int(float(self.string)) == float(self.string):
        return int(float(self.string))
    return float(self.string)
