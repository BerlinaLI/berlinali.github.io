#import urllib2 
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2
from bs4 import BeautifulSoup

def main():
  webUrl = urllib2.urlopen("https://berlina.io/work/")
  print ("result code: "+str(webUrl.getcode()))
  data = webUrl.read()
  print (data)
  
main()