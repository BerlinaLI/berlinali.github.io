import csv

name=["1","2","3"]
link=["ll1","ll2","ll3"]
 #for i in range(10000,81000):
for i in range(0,3):	
 with open('index_test.csv', 'a', encoding='utf-8') as csv_file:
  print (name[i], link[i])
  writer = csv.writer(csv_file)
  writer.writerow([name[i], link[i]])
  