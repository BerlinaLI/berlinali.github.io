var elem = document.getElementById("progress-bar"); 
var workMin  = 25;
var breakMin = 5;
var barHeight = 0;
var runWorkArr = true;
var isPaused = true;
var min;
var sec;
var getTime;
var interval;
var total;
var result; 

function togglePlay(){
  //init to show work
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

//switch between work and break time
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
    num = "0" + num;
  }
  return num;
}

function runProgessBar(minType) {
  total = minType * 60;
  
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

//control panel clicking
if(isPaused){
  $(".workPlus").click(function(){
    workMin++;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  });

  $(".workMinus").click(function(){
    workMin--;
    $(".workNum").text(workMin);
    $(".timer").text(workMin);
  });

  $(".breakPlus").click(function(){
    breakMin++;
    $(".breakNum").text(breakMin);
  });

  $(".breakMinus").click(function(){
    breakMin--;
    $(".breakNum").text(breakMin);
  });
}