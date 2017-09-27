#import urllib2
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

from bs4 import BeautifulSoup

#excel
import csv
from datetime import datetime

url = ["http://faso.com/artist-websites/aa-ad"]

data =[]

for pg in url:
 request = urllib2.Request(pg)
 response = urllib2.urlopen(request,timeout=5) 
 content = response.read()
 soup = BeautifulSoup(content,'html.parser')
 for link in soup.select('a[href*="faso.com/artists"]'):
  #print (link.get('href'))
  data.append(link.get('href'))

print (data)
 
#with open('index.csv', 'a') as csv_file:
# writer = csv.writer(csv_file)
# for name, link in data:
#  writer.writerow([name, link])










#print all links
#for link in soup.find_all('a'):
    #print(link.get('href'))
#     print(link)

#tag=soup.find('a')
#tag = soup.find_all(id='we-recommend')
#tag = soup.find_all('div', id_='profile-display-name').string