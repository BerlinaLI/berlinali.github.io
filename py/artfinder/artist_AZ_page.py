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

divTag = soup.find_all("li", {"class": "artist"})

for tag in divTag:
    # tdTags = tag.find_all("a")
    # for tag in tdTags:
    #     data.append("https://www.artfinder.com"+tag.get('href')+"about/#/")
    tdTags = tag.find("a")
    #data.append("https://www.artfinder.com"+tdTags.get('href')+"about/#/")
    print ("https://www.artfinder.com"+tdTags.get('href')+"about/#/")

#9524

#data = list(set(data))
#print (data[940:960])

#1500:1800
#1800:1900
#[0:200]
#200:300
#450:700
#700:940


#with open('index.csv', 'a') as csv_file:
#	writer = csv.writer(csv_file)
#	writer.writerow([name,link])

