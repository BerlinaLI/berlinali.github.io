from datetime import date
from datetime import time
from datetime import datetime

def main():
 today = datetime.now()
 wd = date.weekday(today)
 days = ["monday", "tuesday","wednesday","Thu","Fri","Sat","Sun"]
 print ("today is day number %d" % wd)
 print ("today is day number %d")
 print ("which is a " + days[wd])

#if _name_ == "_main_":
main();
