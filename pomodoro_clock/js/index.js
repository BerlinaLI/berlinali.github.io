/*
1. pause interval 
https://stackoverflow.com/questions/21277900/javascript-pausing-setinterval/21278007#21278007

2. detect true or false 
if(isPaused)
if(isPaused = true) is true forever
*/

var workMin  = 1;
var breakMin = 1;
var min;
var sec;
var runWorkArr = true;
var getTime;
var isPaused = true;
var interval;
var barHeight = 0;

function togglePlay(){
  min = workMin;
  sec = 0;

  if(isPaused){  
    console.log("run");
    isPaused = false;
    interval = window.setInterval(function() {
      countDown(); 

      if(runWorkArr){
        runProgessBar(workMin);
        $("#progress-bar").css("background-color","green"); 
      }else{
        runProgessBar(breakMin); 
        $("#progress-bar").css("background-color","red");
      }
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
      min = breakMin;
      sec = 0;
      runWorkArr= false;
      $(".status").text("break");
    }else{
      min = workMin;
      sec = 0;
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
    barHeight = 0;
    result = 0;
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

$(".workMinus").click(function(){
  if(isPaused){
    workMin--;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  }
});



// if(isPaused){
//   $(".workPlus").click(function(){workMin++;});
//   $(".workMinus").click(function(){workMin--;});

//   $(".breakPlus").click(function(){breakMin++;});
//   $(".breakMinus").click(function(){breakMin--;});

//   $(".breakNum").text(breakMin);
//   $(".workNum").text(workMin);
//   $(".timer").text(workMin);
//   console.log("workmin: "+ workMin + "breakMin: " + breakMin);
// }

$(".breakPlus").click(function(){
  if(isPaused){
    breakMin++;
    $(".breakNum").text(breakMin);
  }
  console.log(breakMin);
});



$(".breakMinus").click(function(){
  if(isPaused){
    breakMin--;
    $(".breakNum").text(breakMin);
  }
  console.log(breakMin);
});