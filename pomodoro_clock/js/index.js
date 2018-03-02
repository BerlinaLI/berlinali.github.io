//1. pause interval 
//https://stackoverflow.com/questions/21277900/javascript-pausing-setinterval/21278007#21278007




var workArr = [0,3];
var breakArr = [0,5];
var timeArr = workArr;
var min = timeArr[0];
var sec = timeArr[1];
var runWorkArr = true;
var getTime;


function displayTime(){
  var timerDisplay = convertTime(min) + ":" + convertTime(sec);
  $(".timer").text(timerDisplay);
}

function convertTime(num){
  if(num < 10 && num >= 0){
    return num = "0" + num;
  }else{
    return num;
  }
}

function countDown(){
  sec--;
  if(sec== -1){
    sec = 59;
    min --;
  }
  
  displayTime();  
  
  if(sec == 0 && min == 0){
    if(runWorkArr){
      min = breakArr[0];
      sec = breakArr[1];
      runWorkArr= false;
      $(".status").text("break :" + breakArr[1] +"s");
      $(".main").css("background-color", "yellow");
    }else{
      min = workArr[0];
      sec = workArr[1];
      runWorkArr= true;
      $(".status").text("work" + workArr[1] +"s");
      $(".main").css("background-color", "red");
    }
  }
}

$(".status").text("work" + workArr[1] +"s");
$(".main").css("background-color", "red");

var isPaused = false;
var t = window.setInterval(function() {
  if(!isPaused) {
    countDown();
  }
}, 1000);

$('.play').on('click', function(e) {
  console.log("play");
  e.preventDefault();
  isPaused = false;
});

$('.pause').on('click', function(e) {
  console.log("pause");
  e.preventDefault();
  isPaused = true;
});





