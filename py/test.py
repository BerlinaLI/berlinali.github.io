#import urllib2
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2
from bs4 import BeautifulSoup

#import excel file 
import csv
from datetime import datetime

# specify the url
#quote_page = 'https://www.behance.net/misscyndi'
quote_page = 'https://www.behance.net/luizakwiatkowska'

# query the website and return the html to the variable 'page'
page = urllib2.urlopen(quote_page)
if page.getcode() == 200:
#if (str(page.getcode())) == 200

# parse the html using beautiful soap and store in variable `soup`
 soup = BeautifulSoup(page, 'html.parser')

# Take out the <div> of name and get its value
#name_box = soup.find('h1', attrs={'class': 'name'})
#name = name_box.text.strip() # strip() is used to remove starting and trailing
#print (name)

# get the index price
#price_box = soup.find('div', attrs={'id':'profile-display-name'})
 price_box = soup.find('div', attrs={'id':'profile-display-name'})
#price = price_box.text
 print (price_box)

#<div id="profile-company" class="qa-profile-company">cyndi@misscyndi.com</div>

# open a csv file with append, so old data will not be erased
#with open('index.csv', 'a') as csv_file:
 #writer = csv.writer(csv_file)
 #writer.writerow([price, datetime.now()])
