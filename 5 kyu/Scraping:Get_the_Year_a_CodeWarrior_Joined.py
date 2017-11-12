import urllib.request
import re
from bs4 import BeautifulSoup
def get_member_since(username):
    url = 'https://www.codewars.com/users/' + username
    with urllib.request.urlopen(url) as response:
        html = response.read()
    soup = BeautifulSoup(html)
    arr = soup.findAll("div", {"class": "stat"})
    arr = list(map(lambda x: x.get_text(strip=True), arr))
    date = ''
    for i in arr:
        if re.search('Member Since:',i):
            date = i
            break
    return date.replace('Member Since:','')
