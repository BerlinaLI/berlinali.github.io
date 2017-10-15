try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

from bs4 import BeautifulSoup

import re
#import excel file 
import csv
from datetime import datetime

import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

data = []
number = 1

df = pd.read_excel('test_urllist.xlsx', sheetname='sheet1')
 
urls = df['url']
print (urls)

for pg in urls:
	page = urllib2.urlopen(pg)
	soup = BeautifulSoup(page, 'html.parser')

	name = soup.h2.string.strip()
	try:
		link = soup.find(text=re.compile("Visit my website")).parent['href']
		print (name,link, number)
		data.append((name,link))
		number = number +1


		with open('index_artfinder.csv', 'a') as csv_file:
			writer = csv.writer(csv_file)
			#for name, link in data: 
			writer.writerow([name,link])

	except:
		pass	



import win32com.client as wincl
speak = wincl.Dispatch("SAPI.SpVoice")
speak.Speak("finish script")






