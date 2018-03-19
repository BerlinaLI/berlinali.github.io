
/*
this project also can  be viewed on 
https://berlinali.github.io/pcgamebot/
*/


var balls = [];
var teeth;
var total = 20;
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
// var bgdMusic;
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

function preload(){
  // bgdMusic = loadSound("bgdMusic.mp3");
  hitSound = loadSound("hitSound.mp3");
  scoreSound = loadSound("scoreSound.mp3");
  // winSound = loadSound("winSound.mp3"); 
  // loseSound = loadSound("loseSound.mp3");
  myFont = loadFont("acadeClassic.TTF");
}

function setup(){
	canvas = createCanvas(window.innerWidth,window.innerHeight);
	//frameRate(0);
	mic = new p5.AudioIn();
	mic.start();
	
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
	canvasX = random(-1,9);
	canvasY = random(-9,1);
  canvas.position(canvasX,canvasY);
  //background(255); 加了background就不动了。。。
}

function drawIntro(){
	beginText();
	timer1 = millis();
	if(keyIsPressed){
		state = 0.5;
	}
	// if(mouseIsPressed || touchIsDown){
	// 	state = 0.5;
	// }
	
	frameIntro = frameCount;
}

function defaultMode(){  //相当于setup by default
	micBall = new MicBall();
	for(var i=0; i<total; i++){
		balls[i] = new Ball(micBall);
	}
  teeth = new Teeth();
  
	lives = 3;
	score = 0;
	//timer2 = 0;
	state = 1;
}

function startAgain(){
	micBall = new MicBall();
	for(var i=0; i<total; i++){
		balls[i] = new Ball(micBall);
	}
  teeth = new Teeth();
  
	lives = 3;
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
	if(lives == 0 || micBall.y > height-20-micBall.size/2){
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
	if(lives == 0  || micBall.y > height-20-micBall.size/2){
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
	if(keyIsPressed){
		state = 4;
	}
	// if(mouseIsPressed || touchIsDown){
	// 	state = 4;
	// }
}

function winGame(){
	frameEnd = frameCount;
	winText();
  // winSound.play();
	timer3 = millis();
	if(keyIsPressed){
		state = 4;
	}
	// if(mouseIsPressed || touchIsDown){
	// 	state = 4;
	// }
}

function beginText(){
	fill(255);
	stroke(0);
	strokeWeight(6);
	textSize(40);
	text("Sound Reactive Mini Game",0,0,width,height-200);
	
	
	// ellipse(1,this.y,this.size,this.size);

	textSize(17);
	strokeWeight(2);
	
  stroke(255,0,0);
	text("red balls to reduce your lives",0,130,width,height-300);

	stroke(0,0,255);
	text("blue balls to gain more scores",0,130,width,height-200);

	
	strokeWeight(3);
	textSize(17);
	fill(255);
	stroke(0);
	
	if(frameCount % 60 < 45){
		text("Press any key to play!",0,400,width,height-450);
	}
	textStyle(NORMAL);
	fill('rgba(0,0,255, 0.75)');
	noStroke();
	textStyle(ITALIC);
	//text("Control it with your voice volume.\n\n Restart if you hit the red balls for 3 times.",0,100,width,height-200);
}

function playText(){
	stroke(0);
	textAlign(RIGHT);
	textSize(20);
	if(lives <= 2){
    fill("red");
  } else{
    fill("white");
  }
	text("Lives : "+lives,0,0,width-20,150);
	fill(255);
	text("Score : "+score,0,0,width-20,230)
}

function playTime(){
	timer2 = millis();
	ttimer = timer2 - timer1;
	timer = round(ttimer/1000);
	textSize(20);
	text(timer+" sec",0,0,width-20,310);
}

function playTimeAgain(){
	timer4 = millis();
	ttimer = timer4 - timer3;
	timer = round(ttimer/1000);
	textSize(20);
	text(timer+" sec",0,0,width-20,310);
}

function loseText(){
	fill(255);
	textAlign(CENTER,CENTER);
	textStyle(ITALIC);
	stroke(0);
	strokeWeight(6);
	textSize(30);
	text("Game over ! Your score is "+score+".",0,0,width,height-250);
	text("It has played"+" "+timer+" secs.",0,0,width,height-100);
	textSize(20);
	strokeWeight(3);
	if(frameCount % 60 < 45){
		text( "Press any key to play again !",0,0,width,height+100);
	}
}

function winText(){
	fill(255);
	stroke(0);
	strokeWeight(6);
	textAlign(CENTER,CENTER);
	textSize(30);
	text("Congrats ! Your score is "+score+".",0,0,width,height-250);
	text("It has played"+" "+timer+" secs.",0,0,width,height-100);
	textSize(20);
	strokeWeight(3);
	if(frameCount % 60 < 45){
		text("Press any key to play again !",0,0,width,height+100);
	}
}

function Ball(micBall){
	this.micBall = micBall;
	this.size = 40;
	this.speed = 10;
	this.goodBall = random(0,100) < 60;
	
	this.init = function(){
		this.x = random(-width,-20);
		this.y = random(this.size,height-25-this.size*2);
	}
	this.init();
	
	this.render = function(){
		noStroke();
		if(this.goodBall){
			fill('rgb(0,0,255)');
		} else{
			fill('rgb(255,0,0)');
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
		rect(this.micBall.x-7,this.micBall.y+10,14,5);
	}
	
	this.hit = function(){
		stroke(0);
		fill(255);
 		ellipse(this.micBall.x,this.micBall.y+11,10,14);
		lives --;
		this.micBall.color = color(255,0,0);
		hitSound.setVolume(0.05);
		hitSound.play();
	}
	
	this.score = function(){
		fill(0);
    triangle(this.micBall.x-8,this.micBall.y+8,this.micBall.x,this.micBall.y+18,this.micBall.x+8,this.micBall.y+8);
		score ++;
		this.micBall.color = color(0,0,255);
		scoreSound.setVolume(0.05);
		scoreSound.play();
	}
}

function MicBall(){
	this.x = width/2;
	this.y = height*3/4;
	this.size = 50;
	this.ssize = 15;
	this.color = color(255);
	this.speed = 3;
  this.hr = random(0.11,0.12);

	// this.init = function(){ //经常变的值
	
	// }
	
	this.render = function(){
		// this.init();
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
	}
	
	this.update = function(){
		framePlaying = frameCount;
		var frame1 = framePlaying-frameIntro ;
		textSize(100);
		textAlign(CENTER,CENTER);
		stroke(0,127+127*sin(frameCount* this.hr));
    strokeWeight(10);
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
			this.volSpeed = map(this.vol,0,0.1,0,height);
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
			this.volSpeed = map(this.vol,0,0.6,0,height);
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
      strokeWeight(3);
      //triangle(i*this.slength,height,i*this.slength + this.slength/2,height-20,(i+1)*this.slength,height);
      triangle(i*this.slength,height,i*this.slength + this.slength/2,height-40,(i+1)*this.slength,height);
      triangle(i*this.slength,0,i*this.slength + this.slength/2,40,(i+1)*this.slength,0);
    }
  }
}