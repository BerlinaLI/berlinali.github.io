var workArr = [0,3];
var breakArr = [0,2];
var timeArr = workArr;
var min = timeArr[0];
var sec = timeArr[1];
var runWorkArr = true;


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
      $(".main").css("background-color", "yellow");
    }else{
      min = workArr[0];
      sec = workArr[1];
      runWorkArr= true;
       $(".main").css("background-color", "red");
    }
  }
}






// function Timer(callback, delay) {
//     var timerId, start, remaining = delay;

//     this.pause = function() {
//         window.clearTimeout(timerId);
//         remaining -= new Date() - start;
//     };

//     this.resume = function() {
//         start = new Date();
//         window.clearTimeout(timerId);
//         timerId = window.setTimeout(callback, remaining);
//     };

//     this.resume();
// }

// var timer = new Timer(function() {
//     alert("Done!");
// }, 1000);


var getTime = setInterval(function(){countDown();}, 1000);


// $(".play").click(
  

//     var getTime = setInterval(function(){countDown();}, 1000);
// );



// timer.pause();

// timer.resume();