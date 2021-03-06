var n = 3; // n
var balls = [];
var teeth;
var total = 10;
var mic;
var micBall;
var lives;
var score;
var state = 0;
var frameIntro;
var framePlaying;
var frameEnd;


// var timeText = "It has played";
// var endText1 = "Game over! Your score is ";
// var endText2 = "Press any key to play again!";
// var winText1 = "Congrats! Your score is ";
// var winText2 = "Press any key to play again!";
var bgdMusic;
var hitSound;
var scoreSound;
var winSound;
var loseSound;
var myFont;
var canvas;
var timer1;
var timer2;
var timer3;
var timee4;
var ttimer;
var timer;
var mute = false;
var fr ;

function preload(){
  //bgdMusic = loadSound("bgdMusic.mp3");
  hitSound = loadSound("hitSound.mp3");
  scoreSound = loadSound("scoreSound.mp3");
  // winSound = loadSound("winSound.mp3"); 
  // loseSound = loadSound("loseSound.mp3");
  myFont = loadFont("acadeClassic.TTF");
}

function setup(){
  // frameRate(fr);
	canvas = createCanvas(window.innerWidth,window.innerHeight);
	mic = new p5.AudioIn();
	mic.start();
	
	fill(255);
	textSize(50/n);
	textAlign(CENTER,CENTER);
	textFont(myFont);
	
	// bgdMusic.setVolume(0.35);
  // bgdMusic.loop();
}

function draw(){
	stableCanvas();
	fill(255);
	stroke(0);
	strokeWeight(5/n);

//reset with defaultMode before starting from state 1 again
	if(state == 0){
		drawIntro();

	}else if(state == 0.5){
		defaultMode();
			
	}else if(state == 1){
		drawPlaying();
			
	}else if(state == 2){
		loseGame();
		
	}else if(state == 3){
		winGame();
		
	}else if(state == 4){
		startAgain();
			
	}else if(state == 5){
		playAgain();
		
	}
}


function stableCanvas(){
	background(255,255,0);
	canvasX = 0;
	canvasY =0;
  canvas.position(canvasX,canvasY);
}

function shakeCanvas(){
	canvasX = random(-9,9);
	canvasY = random(-9,9);
  canvas.position(canvasX,canvasY);
  //background(255); 加了background就不动了。。。
}

function drawIntro(){
	beginText();
	timer1 = millis();
	if(mouseIsPressed || touchIsDown){
		state = 0.5;
	}
	frameIntro = frameCount;
}

function defaultMode(){  //相当于setup by default
	micBall = new MicBall();
	for(var i=0; i<total; i++){
		balls[i] = new Ball(micBall);
	}
  teeth = new Teeth();
  
	lives = 5;
	score = 0;
	state =1;
}


function startAgain(){
	micBall = new MicBall();
	for(var i=0; i<total; i++){
		balls[i] = new Ball(micBall);
	}
  teeth = new Teeth();
  
	lives = 5;
	score = 0;
	state = 5;
}

function drawPlaying(){
	micBall.render();
	micBall.update();
	for(var i=0; i<balls.length; i++){
		balls[i].render();
		balls[i].update();
	}
  teeth.render();
  
  playText();
  playTime();
	//lose
	if(lives == 0 || micBall.y > height-20/n-micBall.size/2){
		state = 2;
	}
	//win
	if(micBall.y < micBall.size/2){
		state = 3;
	}
}

function playAgain(){
	micBall.render();
	micBall.updateAgain();
	for(var i=0; i<balls.length; i++){
		balls[i].render();
		balls[i].update();
	}
  teeth.render();
	playText();
  playTimeAgain();
	//lose
	if(lives == 0  || micBall.y > height-20/n-micBall.size/2){
		state = 2;
	}
	//win
	if(micBall.y < micBall.size/2){
		state = 3;
	}
}

function loseGame(){
	frameEnd = frameCount;
	loseText();
  // loseSound.play();
	timer3 = millis();
	if(mouseIsPressed || touchIsDown){
		state = 4;
	}
}

function winGame(){
	frameEnd = frameCount;
	winText();
  // winSound.play();
	timer3 = millis();
	if(mouseIsPressed || touchIsDown){
		state = 4;
	}
}

function beginText(){
	fill(255);
	stroke(0);
	strokeWeight(9/n);
	textSize(40/n);
	text("Sound Reactive Flappy Bird",width/2,height/3);
	strokeWeight(3);
	textSize(30/n);
	if(frameCount % 60 < 45){
		// text("Press any key to play!",0,200/n,width,height-200/n);
			text("*** Double Click to Start! ***",width/2, height/3+100);
	}
	// textStyle(NORMAL);
	// textSize(25/n);
	// textStyle(ITALIC);
	// strokeWeight(2);
	// // text("1. Use your voice to control \n \n2. Don't hit on red balls!",width/2,height/3+15);
	// textSize(35/n);
	// strokeWeight(3);
	// text("Press any key to start",width/2, height/4*3);
}

function playText(){
	strokeWeight(3);
	textAlign(RIGHT);
	textSize(30/n);
	if(lives <= 2){
    fill("red");
  } else{
    fill("white");
  }
	text("Lives : "+lives,window.innerWidth-30,100/n);
	// fill(255);
	// text("Score : "+score,0,25,width-20/n,200/n)
}

function playTime(){
	
	fr = frameRate();
	fill(0,0,0);
	textSize(30);
	text(Math.floor(fr), 50,50,200,200);
	console.log(fr);



	timer2 = millis();
	ttimer = timer2 - timer1;
	timer = round(ttimer/1000);
	textSize(30/n);
	text(timer+" sec",window.innerWidth-30,180/n);
}

function playTimeAgain(){
	timer4 = millis();
	ttimer = timer4 - timer3;
	timer = round(ttimer/1000);
	textSize(30/n);
	text(timer+" sec",window.innerWidth-30,180/n);
}

function loseText(){
	fill(255);
	textAlign(CENTER,CENTER);
	textStyle(ITALIC);
	stroke(0);
	strokeWeight(6/n);
	textSize(40/n);
	text("Game over !\n\nYou survived for "+timer+" secs." ,0,0,width,height-250/n);
	//text("",0,0,width,height-100/n);
	textSize(30/n);
	strokeWeight(6/n);
	if(frameCount % 60 < 45){
		text( "Click the screen to play again !",width/2,height/4*3);
	}
}

function winText(){
	fill(255);
	stroke(0);
	strokeWeight(6/n);
	textAlign(CENTER,CENTER);
	textSize(40/n);
	text("Congrats ! Your score is "+score+".",0,0,width,height-250/n);
	text("It has played"+" "+timer+" secs.",0,0,width,height-100/n);
	textSize(30/n);
	strokeWeight(3/n);
	if(frameCount % 60 < 45){
		text("Click the screen to play again !",0,0,width,height+100);
	}
}

function Ball(micBall){
	this.micBall = micBall;
	this.size = 40/n;
	this.speed = 10/n;
	this.goodBall = random(0,100/n) < 60/n;
	
	this.init = function(){
		this.x = random(-width,-20/n);
		this.y = random(this.size+30,height-25/n-this.size*2);
	}
	this.init();
	
	this.render = function(){
		noStroke();
		if(this.goodBall){
			fill('rgba(0,0,255,0.75)');
		} else{
			fill('rgba(255,0,0,0.75)');
		}
		ellipse(this.x,this.y,this.size,this.size);
	}
	
	this.update =  function(){
		this.x += this.speed;
		if(this.x > width){
			this.init();
		}
		this.detectMicBall();
	}

	this.detectMicBall = function(){
		var d = dist(this.x,this.y,this.micBall.x,this.micBall.y);
		if(d < this.size/2+this.micBall.size/2){
			shakeCanvas();
			if(this.goodBall){
				this.score();
			}else{
				this.hit();
			}
			this.init();
		}else{
			this.flatMouth();
		}
	}
	
	this.flatMouth = function(){
		fill(0);
		rect(this.micBall.x-7/n,this.micBall.y+10/n,14/n,5/n);
	}
	
	this.hit = function(){
		stroke(0);
		fill(255);
 		ellipse(this.micBall.x,this.micBall.y+11/n,10/n,14/n);
		lives --;
		this.micBall.color = color(255,0,0);
		hitSound.setVolume(0.5);
		hitSound.play();
	}
	
	this.score = function(){
		fill(0);
    triangle(this.micBall.x-8/n,this.micBall.y+8/n,this.micBall.x,this.micBall.y+18/n,this.micBall.x+8/n,this.micBall.y+8/n);
		score ++;
		this.micBall.color = color(0,0,255);
		scoreSound.setVolume(0.5);
		scoreSound.play();
	}
}

function MicBall(){
	this.x = width/2;
	this.y = height*3/4;
	this.size = 50/n;
	this.ssize = 15/n;
	this.color = color(255);
	this.speed = 3/n;
  this.hr = random(0.11,0.12);

	// this.init = function(){ //经常变的值
	
	// }
	
	this.render = function(){
		// this.init();
		fill(this.color);
		stroke(0);
		strokeWeight(5/n);

		ellipse(this.x,this.y,this.size,this.size);
		this.color = color(255);
		fill(0);
		noStroke();
		ellipse(this.x-10/n,this.y-5/n,this.ssize,this.ssize);
		ellipse(this.x+10/n,this.y-5/n,this.ssize,this.ssize);
	//change
		fill(this.color);
	}
	
	this.update = function(){
		framePlaying = frameCount;
		var frame1 = framePlaying-frameIntro ;
		textSize(100/n);
		textAlign(CENTER,CENTER);
		stroke(0,127+127*sin(frameCount* this.hr));
    strokeWeight(10/n);
		if(frame1 < 20){
			text("3",0,0,width,height);
		}
		if(frame1 > 20 && frame1 <40 ){
			text("2",0,0,width,height);
		}
		if(frame1 > 40 && frame1 <60 ){
			text("1",0,0,width,height);
		}
		
		if(frame1 > 60){
			this.vol = mic.getLevel();
			// fill(50);
			// textSize(10);
			// text(this.vol*100, 10, 10, 170, 180); 
			this.volSpeed = map(this.vol,0,0.7,0,height);
			this.totalSpeed = this.speed - this.volSpeed/10;
			this.y += this.totalSpeed;
		}
	}
	
	this.updateAgain = function(){
		framePlaying = frameCount;
		var frame2 = framePlaying-frameEnd ;
		textSize(100);
		textAlign(CENTER,CENTER);
		stroke(0,127+127*sin(frameCount* this.hr));
    strokeWeight(10);
		if(frame2 < 20){
			text("3",0,0,width,height);
		}
		if(frame2 > 20 && frame2 <40 ){
			text("2",0,0,width,height);
		}
		if(frame2 > 40 && frame2 <60 ){
			text("1",0,0,width,height);
		}
		
		if(frame2 > 60){
			this.vol = mic.getLevel();
			this.volSpeed = map(this.vol,0,0.3,0,height);
			this.totalSpeed = this.speed - this.volSpeed/20;
			this.y += this.totalSpeed;
		}
	}
}

function Teeth(){
  this.hr = random(0.1,0.12);
  this.slength = 20;

  this.render = function(){
    for(var i = 0 ; i < width/20 ;i++){
      fill(255);
      stroke(125,127+127*sin(frameCount* this.hr));
      strokeWeight(3/n);
      triangle(i*this.slength,height,i*this.slength + this.slength/2,height-25,(i+1)*this.slength,height);
      triangle(i*this.slength,0,i*this.slength + this.slength/2,25,(i+1)*this.slength,0);
    }
  }
}