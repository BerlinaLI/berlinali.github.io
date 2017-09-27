from __main__ import *

try:
	data =[]

	for pg1 in artistUrlArr:
		request1 = urllib2.Request(pg1)
		response1 = urllib2.urlopen(request1,timeout=8)

	#check website status
		if response1.getcode() == 200:
			content1 = response1.read()
			soup1 = BeautifulSoup(content1,'html.parser')
			name = soup1.h1.string
			link = soup1.b.find('a').get('href')

			dataExist = name and link
			if dataExist:
				#print (name, link)
				data.append((name, link))

except:
	pass


LenOfData = len(data)
print ("number of data: " +str(LenOfData))

for i in range(0,LenOfData):	
 with open('index_testexport.csv', 'a', encoding='utf-8') as csv_file:
  writer = csv.writer(csv_file)
  writer.writerow([data[i][0], data[i][1]])


