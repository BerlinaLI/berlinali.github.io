var balls = [];
var total = 25;
var paddle;
var score;
var lives = 3;
var chart;
var angle = 0;
var fredscream;

var startCenterX;
var startCenterY;
var startButtonSize = 130;
/*
 0 = intro;
 1 = play;
 2 = end; 
*/
var state = 0;

function preload(){
  fredscream = loadSound("fredscreaming.m4a");
}
function setup() {
  createCanvas(1000,600);
 
  
  cart = loadImage("cart.jpg");
 
  startCenterX = width/2 - 5; //  为什么还需要initiate在var前面？
  startCenterY = 472;

  textFont("Helvetica");
  textSize(50);
  textAlign(CENTER,CENTER);
  
 
}

function draw() {
  background(2,82,179);
  
  
  
  if(state == 0){
    drawIntro();
  }else if (state == 1){
    drawPlaying();
  } else if(state == 2){
    drawEnd();
  }
}

function drawIntro(){
  fill(255,0,0);
  ellipse(startCenterX, startCenterY,startButtonSize,startButtonSize);
  
  fill(255);
  noStroke();
  textSize(80);
  text("READY FOR 11.11?",0,0,width,height -50);
  textSize(40);
  text("YES",0,450,width,50);
}

function drawPlaying(){
  
  // fill(255,0,0);
  // stroke(255);
  // textSize(100);
  // text("买",100,100,500,500);
  
  
  for (var i=0; i<balls.length;i++){
    balls[i].update();
    balls[i].render();
  }
  paddle.update();
  paddle.render();
  
  if(lives == 0){
    gameOver();
  }
  textSize(50);
  textAlign(LEFT);
  strokeWeight(15);
  stroke(0);
  var timeleft = round(10- millis()/1000);
  text("time left:"+ timeleft,100,100);
  text("lives:"+ lives,width/2,100);
}

function drawEnd(){
  textSize(50);
  textAlign(CENTER,CENTER);
  
  fill(255,0,0);
  ellipse(startCenterX, startCenterY,startButtonSize,startButtonSize);
  
  fill(255);
  noStroke();
  text("DUDE,\n YOU ARE BANKRUPTED!",0,0,width,height -50);
  
 
  fill(255);
  strokeWeight(6);
  textSize(20);
  text("SHOP AGAIN",0,450,width,50);

  fredscream.play();
}

function gameOver(){
  state = 2;
}

function startGame(){
  lives = 3 ;
  score = 0;
  paddle = new Paddle(); 
  for ( var i=0; i < total ; i++){
    balls[i] = new Ball(paddle);
  }
  state = 1;
}

function mousePressed(){
  if(state == 0 || state == 2){
     var d = dist(mouseX, mouseY,startCenterX, startCenterY);
     if (d < startButtonSize/2){
       startGame();
     }
  }  
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    paddle.moveLeft();
  } else if(keyCode == RIGHT_ARROW){
    paddle.moveRight();
  }
}


function Ball(paddle){
  this.paddle = paddle;
  this.size = random(20,100);
  this.speed = 5;
  
  this.init = function(){
    this.y = random(-height,200);
    this.x = random(20,width-20);
    this.bad = (random(0,100) < 35) ; 
  }
  
  this.render = function(){
    // push();
    // rotate(angle);
    // angle++;
    // var a = random(0,5);
    // stroke(0,50*a);
    if(this.bad){
      fill(255,0,0);
    } else {
      fill(255);
    }
    noStroke();
    //ellipse(this.x, this.y,this.size, this.size);
    textSize(this.size);
    text("买",this.x, this.y);
    //pop();
  }
  
  this.update = function(){
    this.y += this.speed;
    this.testPaddle();
    if((this.y - this.size)> height){
      this.init();
    }
  }
   
  this.testPaddle = function(){
    var top = (this.y + this.size/2 > this.paddle.y) ;
    var bottom = (this.y - this.size/2 < this.paddle.y + this.paddle.height);
    var left = (this.x + this.size/2 > this.paddle.x);
    var right =(this.x -this.size/2 < this.paddle.x  + this.paddle.width);
     
    if( top && bottom && left && right){
      if(this.bad){
        this.paddle.hit();
      } else{
        this.paddle.score();
      }
      this.paddle.score();
      this.init();
    }
  }
  
  this.init();
}

//球拍

function Paddle(){
  
  this.width = 120;
  this.height = 20;
  this.speed = 15; 
  this.speedY = 0.1;
  this.x = width/2 - this.width/2 ; //??????
  this.y = height - 130;
  this.color = color(255);
  
  
  this.update = function(){
    this.y -= this.speedY;
  }
  
  this.score = function(){
    this.color = color (0,255,0);
    background(255);
    score ++ ; 
    this.width += 3;
  }
  
  this.hit = function(){
    this.color = color(255,0,0);
    background(255,0,0);
    lives --;
    this.width -= 5;
  }

  this.render = function(){
    fill(this.color);
    //rect();
    image(cart,this.x,this.y,this.width,this.width*cart.height/cart.width);
    this.color = color(255); 
  }
  
  this.moveRight = function(){
    this.x += this.speed;
    if(this.x + this.width > width){
      this.x = width - this.width;
    }
  }
  
  this.moveLeft = function(){
    this.x -= this.speed;
    if(this.x < 0){
        this.x = 0;
    }
  }
}