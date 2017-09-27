#import urllib2
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

from bs4 import BeautifulSoup

#excel
import csv
from datetime import datetime

aaUrlArr =[]
links = ['http://faso.com/artist-websites/'+chr(i) for i in range(97,123)]

for pg in links:
 request = urllib2.Request(pg)
 response = urllib2.urlopen(request) 
 content = response.read()
 soup = BeautifulSoup(content,'html.parser')

 for link in soup.select('a[href*="http://faso.com/artist-websites/"]'):
  #print (link.get('href'))
  if link.get('href') not in links:
   aaUrlArr.append(link.get('href'))
 
 aaUrlArr.remove('http://faso.com/artist-websites/')

print (aaUrlArr)
#######################################################













#print all links
#for link in soup.find_all('a'):
    #print(link.get('href'))
#     print(link)

#tag=soup.find('a')
#tag = soup.find_all(id='we-recommend')
#tag = soup.find_all('div', id_='profile-display-name').string