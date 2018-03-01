var timeArr = [1,2];
var min = timeArr[0];
var sec = timeArr[1];
var time = 0;

function convertTime(num){
  if(num < 10 && num > 0){
    return num = "0" + num;
  }
}

function displayTime(){
  //var timerDisplay = convertTime(min) + ":" + convertTime(sec);
  var timerDisplay = min + ":" + sec;
  $(".timer").text(timerDisplay);
  //  document.getElementById("demo").innerHTML = t;
}
//every 1 sec, add 1
function countDown(){
  sec--;
  if(sec== -1){
    sec = 59;
    min --;
  }
  displayTime();
  
  if(sec == 0 && min == 0){
    console.log("stop");
    clearInterval(getTime);
  }
  
}

var getTime = setInterval(function(){countDown();}, 1000);