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


quote_page = 'https://www.artfinder.com/artist/57design/about/#/'

page = urllib2.urlopen(quote_page)
soup = BeautifulSoup(page, 'html.parser')

name = soup.h2.string.strip()
link = soup.find(text=re.compile("Visit my website")).parent['href']
print (name,link)

with open('index.csv', 'a') as csv_file:
	writer = csv.writer(csv_file)
	writer.writerow([name,link])

