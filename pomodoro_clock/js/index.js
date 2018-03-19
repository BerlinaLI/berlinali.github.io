/*
1. pause interval 
https://stackoverflow.com/questions/21277900/javascript-pausing-setinterval/21278007#21278007

2. detect true or false 
if(isPaused)
if(isPaused = true) is true forever
*/

// var workArr = [0,3];
var workArr=[];
var breakArr = [0,5];
var min;
var sec;
var runWorkArr = true;
var getTime;
var isPaused = true;
var interval;


$(".status").text("work");
$(".main").css("background-color", "red");


var workMin  = 25;

$(".workPlus").click(function(){
  if(isPaused){
    workMin++;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  }
});

$(".workMinus").click(function(){
  if(isPaused){
    workMin--;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  }
});





function togglePlay(){

  workArr = [workMin,0];
  min = workArr[0];
  sec = workArr[1];

  if(isPaused){  
    console.log("run");
    isPaused = false;
    interval = window.setInterval(function() {
      countDown();
    }, 1000);
  }else{
    isPaused = true;
    console.log("pause");
    clearInterval(interval);
    //interval = null;
  }
}

function countDown(){
  sec--;
  if(sec== -1){
    sec = 59;
    min --;
  }

  if(sec == 59 && min == -1){
    if(runWorkArr){
      min = breakArr[0];
      sec = breakArr[1];
      runWorkArr= false;
      $(".status").text("break :" + breakArr[1] +"s");
      $(".main").css("background-color", "red");
    }else{
      min = workArr[0];
      sec = workArr[1];
      runWorkArr= true;
      $(".status").text("work");
      $(".main").css("background-color", "green");
    }
  }
  displayTime();  
}


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








