/*
balls detect 分开
*/

var balls = [];
var total = 15;
var mic;
var micBall;
var lives;
var state = 0;
var titleText = "9 Lives Self-Suicide Bot"
var startText = "Press any key \n\nto play!";
var endText = "Game over!\n \nPress any key to play again!";
var winText = "Congrats! \n \nPress any key to play again!";
//var bgdMusic;
var hitSound;
var scoreSound;
var winSound;
var loseSound;
var myFont;
var canvas;
var timer1;
var timer2;
var timer3;
var timer;

function preload(){
 // bgdMusic = loadSound("bgdMusic.MP3");
  hitSound = loadSound("hitSound.MP3");
  scoreSound = loadSound("scoreSound.MP3");
  winSound = loadSound("winSound.MP3"); 
  loseSound = loadSound("loseSound.MP3");
  myFont = loadFont("acadeClassic.TTF");
}

function setup(){
	canvas = createCanvas(640,480);
	frameRate(15);
	mic = new p5.AudioIn();
	mic.start();
	ballsInit();
	fill(255);
	textSize(50);
	textAlign(CENTER,CENTER);
	textFont(myFont);
	
 // bgdMusic.loop();
}

function draw(){
	stableCanvas();
	fill(255);
	stroke(0);
	strokeWeight(5);

	ballsDraw();

	if(state == 0){
		drawIntro();
	}else if(state == 1){
		drawPlaying();
	}else if(state == 2){
		drawEnd();
	}else if(state == 3){
		winGame();
	}
}

function ballsInit(){
	for(var i=0; i<total; i++){
		balls[i] = new Ball(micBall);
	}
}

function ballsDraw(){
	for(var i=0; i<balls.length; i++){
		balls[i].render();
		balls[i].update();
	}
}

function stableCanvas(){
	background(255,255,0);
	canvasX = 0;
	canvasY =0;
  canvas.position(canvasX,canvasY);
}

function shakeCanvas(){
	canvasX = random(-1,9);
	canvasY = random(-9,1);
  canvas.position(canvasX,canvasY);
  //background(255); 加了background就不动了。。。
}

function drawIntro(){
	fill(255);
	stroke(0);
	text(titleText,0,0,width,height-200);
	textSize(20);
	textStyle(ITALIC);
	text(startText,0,200,width,height-200);
	textSize(40);
	textStyle(NORMAL);
	timer1 = millis();
	if(keyIsPressed){
		startGame();
	}
}

function startGame(){  //相当于setup
	lives = 9;
	micBall = new MicBall();
	ballsInit();
	state = 1;
}

function drawPlaying(){
	micBall.render();
	//ballsDraw();
	for(var i=0; i<balls.length ; i++)
	balls[i].detectMicBall();
	
	if(lives <= 2){
    fill("red");
  } else{
    fill("white");
  }
  stroke(0);
	textAlign(RIGHT);
	textSize(25);
	text("Lives : "+lives,0,0,width-20,80);
	timer2 = millis();
	timer3 = timer2 - timer1;
	timer = round(timer3/1000);
	textSize(20);
	text(timer+" sec",0,0,width-20,160)
	
	if(lives == 0){
		state = 2;
	}
}

function drawEnd(){

	fill(255);
	textAlign(CENTER,CENTER);
	textSize(20);
	textStyle(ITALIC);
	stroke(0);
	text(endText,0,0,width,height-150);
  loseSound.play();
	if(keyIsPressed){
		startGame();
	}
}

function winGame(){
	fill(255);
	stroke(0);
	textAlign(CENTER,CENTER);
	textSize(20);
	textStyle(ITALIC);
	text(winText,0,0,width,height-100);
  winSound.play();
	if(keyIsPressed){
		startGame();
	}
}
function Ball(micBall){
	this.micBall = micBall;
	this.size = 20;
	this.speed = 10;
	this.goodBall = random(0,100)<50;
	
	this.init = function(){
		this.x = random(-width,-20);
		this.y = random(this.size,height-this.size*2);
	}
	
	this.render = function(){
		noStroke();
		if(this.goodBall){
			fill(0,0,255);
		} else{
			fill(255,0,0);
		}
		ellipse(this.x,this.y,this.size,this.size);
	}
	
	this.update =  function(){
		this.x += this.speed;
		if(this.x > width){
			this.init();
		}
	}
	
	this.detectMicBall = function(){
		if(state == 1){
			var d = dist(this.x,this.y,this.micBall.x,this.micBall.y);
			if(d < this.size/2+this.micBall.size/2){
				shakeCanvas();
				if(this.goodBall){
					this.micBall.score();
				}else{
					this.micBall.hit();
				}
				this.init();
			}else{
				this.micBall.flatMouth();
			}
		}
	}
	
	this.init();
}

function MicBall(){
	this.x = width/2;
	this.size = 50;
	this.ssize = 15;
	this.color = color(255);
	
	this.init = function(){ //经常变的值
		this.vol = mic.getLevel();
		this.y = map(this.vol,0,0.1,height-50,0);
	}
	
	this.render = function(){
		this.init();
		fill(this.color);
		stroke(0);
		strokeWeight(5);
		ellipse(this.x,this.y,this.size,this.size);
		this.color = color(255);
		fill(0);
		noStroke();
		ellipse(this.x-10,this.y-5,this.ssize,this.ssize);
		ellipse(this.x+10,this.y-5,this.ssize,this.ssize);
	//change
		fill(this.color);
		if(this.y < this.size/2){
			state = 3;
		}
	}
	
	this.flatMouth = function(){
		fill(0);
		rect(this.x-7,this.y+10,14,5);
	}
	
	this.hit = function(){
		lives --;
		this.y += 10;
		this.color = color(255,0,0);
		hitSound.play();
		stroke(0);
		fill(255);
 		ellipse(this.x,this.y+11,10,14);
	}
	
	this.score = function(){
		lives ++;
		this.y -= 10;
		this.color = color(0,0,255);
		scoreSound.play();
		fill(0);
    triangle(this.x-8,this.y+8,this.x,this.y+18,this.x+8,this.y+8);
	}
}
