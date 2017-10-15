#import urllib2
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

from bs4 import BeautifulSoup

import re
#import excel file 
import csv
from datetime import datetime

data = []

quote_page = 'https://www.artfinder.com/artists-az/#/'
page = urllib2.urlopen(quote_page)
soup = BeautifulSoup(page, 'html.parser')


#url = soup.find('a').get('h')
#for link in soup.find_all('a'):
	#if soup.find(text=re.compile('/artist')):
#	print("https://www.artfinder.com"+link.get('href')+"about/#/")
	

divTag = soup.find_all("li", {"class": "artist"})

for tag in divTag:
    tdTags = tag.find_all("a")
    for tag in tdTags:
        data.append("https://www.artfinder.com"+tag.get('href')+"about/#/")

#9524
print (data[0:500])

#with open('index.csv', 'a') as csv_file:
#	writer = csv.writer(csv_file)
#	writer.writerow([name,link])

