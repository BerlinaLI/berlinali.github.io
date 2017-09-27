#import urllib2
try:
 import urllib.request as urllib2
except ImportError:
 import urllib2
from bs4 import BeautifulSoup

#import excel file 
import csv
from datetime import datetime

import time 

import re


number = 10000
validNum = 0
s1  = time.time()

for i in range(84400, 0, -1):	
  page = urllib2.urlopen('http://www.artwanted.com/artist.cfm?ArtID={}'.format(i)+'&Tab=Contact')
  data=[]
  content = page.read()
  soup = BeautifulSoup(content,'html.parser')
  name = soup.h1.getText().strip()
  #link = soup.find(string = re.compile("www."))
  linkArr = soup.find_all(string = re.compile("www."))
  link = soup.find_all(string = re.compile("www."))[0]
  lensLink = len(linkArr)
  #print (link)

  if name and lensLink!=1:
   validNum = validNum + 1
   data.append((name, link))
   print (name,link,validNum,"/",84401-i)

   with open('index.csv', 'a', encoding='utf-8') as csv_file:
    writer = csv.writer(csv_file)
    for name, link in data:
     writer.writerow([name, link])

  number = number - 1

print ("Request time = "+str(time.time() - s1))


import win32com.client as wincl
speak = wincl.Dispatch("SAPI.SpVoice")
speak.Speak("finish the script")
#5 / 12s (with try)
