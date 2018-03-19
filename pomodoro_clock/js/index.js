/*
1. pause interval 
https://stackoverflow.com/questions/21277900/javascript-pausing-setinterval/21278007#21278007

2. detect true or false 
if(isPaused)
if(isPaused = true) is true forever
*/

// var workArr = [0,3];

var workMin  = 1;
var breakMin = 1;
var workArr=[];
var breakArr = [];
var min;
var sec;
var runWorkArr = true;
var getTime;
var isPaused = true;
var interval;
var barHeight = 0;


function togglePlay(){
  workArr = [workMin,0];
  breakArr = [breakMin,0];
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

  // runProgessBar(breakMin);
  // runProgessBar(workMin);

  if(sec == 59 && min == -1){
    if(runWorkArr){
      min = breakArr[0];
      sec = breakArr[1];
      runWorkArr= false;
      $(".status").text("break");
    }else{
      min = workArr[0];
      sec = workArr[1];
      runWorkArr= true;
      $(".status").text("work");
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


function runProgessBar(minType) {
  var total = minType * 60;
  var result; 
  var elem = document.getElementById("progress-bar"); 
 
  if (barHeight >= total) {
    clearInterval(id);
  } else {
    barHeight++; 
    result = 300 * barHeight/total; 
    elem.style.height = result + 'px'; 
    console.log(result);
  }
}

$(".workPlus").click(function(){
  if(isPaused){
    workMin++;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  }
});

$(".breakPlus").click(function(){
  if(isPaused){
    breakMin++;
    $(".breakNum").text(breakMin);
  }
  console.log(breakMin);
});

$(".workMinus").click(function(){
  if(isPaused){
    workMin--;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  }
});

$(".breakMinus").click(function(){
  if(isPaused){
    breakMin--;
    $(".breakNum").text(breakMin);
  }
  console.log(breakMin);
});