import re
def check_password(s):
    print(s)
    if re.search('^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\!@#\$%\^&\*\?])[A-Za-z\d\!@#\$%\^&\*\?]{8,20}$',s):
        return 'valid'
    return 'not valid'
