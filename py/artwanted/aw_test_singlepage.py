#import urllib2
try:
 import urllib.request as urllib2
except ImportError:
 import urllib2
from bs4 import BeautifulSoup

#import excel file 
import csv
from datetime import datetime

import re

number = 10000
validNum = 0

#for i in range(10000,81000):
for i in range(88000, 10000, -1):	
 try:
  page = urllib2.urlopen('http://www.artwanted.com/artist.cfm?ArtID={}'.format(i)+'&Tab=Contact')
 except:
  continue
 else:
  content = page.read()
  soup = BeautifulSoup(content,'html.parser')
  name = soup.h1.getText().strip()
  link = soup.find_all(string = re.compile("www."))[0]
  wwwLen = len(soup.find_all(string = re.compile("www.")))
  hasNoPersonalWebsite = soup.find_all("a", string="http://www.artwanted.com")
  lens=len(hasNoPersonalWebsite)

  if name != "Browse Artwork" and lens != 1 and wwwLen != 1:
   validNum = validNum + 1
   print (name,link,validNum,"/",88001-i)
   with open('index_artwanted.csv', 'a', encoding='utf-8') as csv_file:
    writer = csv.writer(csv_file)
    writer.writerow([name, link])
  
  number = number - 1


