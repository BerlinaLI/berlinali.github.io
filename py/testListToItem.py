#import urllib2
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

from bs4 import BeautifulSoup

#excel
import csv
from datetime import datetime

#########################
try:
	#aaUrl = ["http://faso.com/artist-websites/aa-ad"]
	aaUrl=['http://faso.com/artist-websites/aj-an', 'http://faso.com/artist-websites/ao-as', 'http://faso.com/artist-websites/at-az', 'http://faso.com/artist-websites/ba-bc', 'http://faso.com/artist-websites/bd-bg', 'http://faso.com/artist-websites/bh-bk', 'http://faso.com/artist-websites/bl-bn', 'http://faso.com/artist-websites/bo-bq', 'http://faso.com/artist-websites/br-bt', 'http://faso.com/artist-websites/bu-bz', 'http://faso.com/artist-websites/ca-cc', 'http://faso.com/artist-websites/cd-cg', 'http://faso.com/artist-websites/ch-ck', 'http://faso.com/artist-websites/cl-cn', 'http://faso.com/artist-websites/co-cq', 'http://faso.com/artist-websites/cr-ct', 'http://faso.com/artist-websites/cu-cz', 'http://faso.com/artist-websites/da-dd', 'http://faso.com/artist-websites/de-di', 'http://faso.com/artist-websites/dj-dn', 'http://faso.com/artist-websites/do-ds', 'http://faso.com/artist-websites/dt-dz', 'http://faso.com/artist-websites/ea-ef', 'http://faso.com/artist-websites/eg-el', 'http://faso.com/artist-websites/em-er', 'http://faso.com/artist-websites/es-ez', 'http://faso.com/artist-websites/fa-fd', 'http://faso.com/artist-websites/fe-fi', 'http://faso.com/artist-websites/fj-fn', 'http://faso.com/artist-websites/fo-fs', 'http://faso.com/artist-websites/ft-fz', 'http://faso.com/artist-websites/ga-gd', 'http://faso.com/artist-websites/ge-gi', 'http://faso.com/artist-websites/gj-gn', 'http://faso.com/artist-websites/go-gs', 'http://faso.com/artist-websites/gt-gz', 'http://faso.com/artist-websites/ha-hc', 'http://faso.com/artist-websites/hd-hg', 'http://faso.com/artist-websites/hh-hk', 'http://faso.com/artist-websites/hl-hn', 'http://faso.com/artist-websites/ho-hq', 'http://faso.com/artist-websites/hr-ht', 'http://faso.com/artist-websites/hu-hz', 'http://faso.com/artist-websites/ja-jf', 'http://faso.com/artist-websites/jg-jl', 'http://faso.com/artist-websites/jm-jr', 'http://faso.com/artist-websites/js-jz', 'http://faso.com/artist-websites/ka-kd', 'http://faso.com/artist-websites/ke-ki', 'http://faso.com/artist-websites/kj-kn', 'http://faso.com/artist-websites/ko-ks', 'http://faso.com/artist-websites/kt-kz', 'http://faso.com/artist-websites/la-ld', 'http://faso.com/artist-websites/le-li', 'http://faso.com/artist-websites/lj-ln', 'http://faso.com/artist-websites/lo-ls', 'http://faso.com/artist-websites/lt-lz', 'http://faso.com/artist-websites/ma-mc', 'http://faso.com/artist-websites/md-mg', 'http://faso.com/artist-websites/mh-mk', 'http://faso.com/artist-websites/ml-mn', 'http://faso.com/artist-websites/mo-mq', 'http://faso.com/artist-websites/mr-mt', 'http://faso.com/artist-websites/mu-mz', 'http://faso.com/artist-websites/na-nf', 'http://faso.com/artist-websites/ng-nl', 'http://faso.com/artist-websites/nm-nr', 'http://faso.com/artist-websites/ns-nz', 'http://faso.com/artist-websites/oa-of', 'http://faso.com/artist-websites/og-ol', 'http://faso.com/artist-websites/om-or', 'http://faso.com/artist-websites/os-oz', 'http://faso.com/artist-websites/pa-pd', 'http://faso.com/artist-websites/pe-pi', 'http://faso.com/artist-websites/pj-pn', 'http://faso.com/artist-websites/po-ps', 'http://faso.com/artist-websites/pt-pz', 'http://faso.com/artist-websites/ra-rd', 'http://faso.com/artist-websites/re-ri', 'http://faso.com/artist-websites/rj-rn', 'http://faso.com/artist-websites/ro-rs', 'http://faso.com/artist-websites/rt-rz', 'http://faso.com/artist-websites/sa-sc', 'http://faso.com/artist-websites/sd-sg', 'http://faso.com/artist-websites/sh-sk', 'http://faso.com/artist-websites/sl-sn', 'http://faso.com/artist-websites/so-sq', 'http://faso.com/artist-websites/sr-st', 'http://faso.com/artist-websites/su-sz', 'http://faso.com/artist-websites/ta-td', 'http://faso.com/artist-websites/te-ti', 'http://faso.com/artist-websites/tj-tn', 'http://faso.com/artist-websites/to-ts', 'http://faso.com/artist-websites/tt-tz', 'http://faso.com/artist-websites/va-vf', 'http://faso.com/artist-websites/vg-vl', 'http://faso.com/artist-websites/vm-vr', 'http://faso.com/artist-websites/vs-vz', 'http://faso.com/artist-websites/wa-wc', 'http://faso.com/artist-websites/wd-wg', 'http://faso.com/artist-websites/wh-wk', 'http://faso.com/artist-websites/wl-wn', 'http://faso.com/artist-websites/wo-wq', 'http://faso.com/artist-websites/wr-wt', 'http://faso.com/artist-websites/wu-wz']
	#aaUrl=['http://faso.com/artist-websites/aj-an/', 'http://faso.com/artist-websites/ao-as/', 'http://faso.com/artist-websites/at-az/', 'http://faso.com/artist-websites/ba-bc/', 'http://faso.com/artist-websites/bd-bg/', 'http://faso.com/artist-websites/bh-bk/', 'http://faso.com/artist-websites/bl-bn/', 'http://faso.com/artist-websites/bo-bq/', 'http://faso.com/artist-websites/br-bt/', 'http://faso.com/artist-websites/bu-bz/', 'http://faso.com/artist-websites/ca-cc/', 'http://faso.com/artist-websites/cd-cg/', 'http://faso.com/artist-websites/ch-ck/', 'http://faso.com/artist-websites/cl-cn/', 'http://faso.com/artist-websites/co-cq/', 'http://faso.com/artist-websites/cr-ct/', 'http://faso.com/artist-websites/cu-cz/']
	#aaUrl=['http://faso.com/artist-websites/do-ds']

	artistUrlArr =[]

	#for subpg in aaUrl:
	for pg in aaUrl:
		request = urllib2.Request(pg)
		response = urllib2.urlopen(request) 
		content = response.read()
		soup = BeautifulSoup(content,'html.parser')
		for link in soup.select('a[href*="faso.com/artists"]'):
		#	print (link.get('href'))
			artistUrlArr.append(link.get('href'))
		#print (soup.body.img)

	#######################################################
	#url = ["http://faso.com/artists/brianblood.html","http://faso.com/artists/keithbond.html"]

	data =[]

	for pg1 in artistUrlArr:
		request1 = urllib2.Request(pg1)
		response1 = urllib2.urlopen(request1,timeout=1)

	#check website status
		if response1.getcode() == 200:
			content1 = response1.read()
			soup1 = BeautifulSoup(content1,'html.parser')
			#name
			name = soup1.h1.string

			#link
			link = soup1.b.find('a').get('href')

			dataExist = name and link
			if dataExist:
				print (name, link)
				data.append((name, link))
			else:
				print ("this is an exception")


		with open('index.csv', 'a', encoding='utf-8') as csv_file:
			writer = csv.writer(csv_file)
			# The for loop
			for name, link in data:
				writer.writerow([name, link])

except:
	pass







#print all links
#for link in soup.find_all('a'):
    #print(link.get('href'))
#     print(link)

#tag=soup.find('a')
#tag = soup.find_all(id='we-recommend')
#tag = soup.find_all('div', id_='profile-display-name').string