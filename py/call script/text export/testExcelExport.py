from __main__ import *

import csv

for i in range(0,3):	
 with open('index_testexport.csv', 'a', encoding='utf-8') as csv_file:
  print (data[i][0], data[i][1])
  writer = csv.writer(csv_file)
  writer.writerow([data[i][0], data[i][1]])