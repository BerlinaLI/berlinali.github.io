/*
part 1 dom and button
use button to change effect and click to change button
*/

// var button;
// var cnv;
// var x = 0;
// var y = 0;

// function setup() {
//   cnv = createCanvas(640,480);
//   cnv.position(x,y);
//   button = createButton("change");
//   button.position(20,20);
//   button.mousePressed(change);
//   noLoop();
//   colorMode(HSB);
// }

// function draw() {
//   background(200);
//   change();
// }

// function change(){
//   background(random(255),255,255);
//   fill(random(255),255,255);
//   ellipse(width/2,height/2,200,200);
  
//   x += random(-3,10);
//   y += random(-3,10);
//   cnv.position(x,y);
// }

/*part 3 input
*/
// var input;

// function setup(){
//   createCanvas(640,480);
  
//   input = createInput();
//   input.position(20,65);
  
//   var button = createButton("submit");
//   button.position(170,65);
//   button.mousePressed(greet);
  
//   var greeting = createP("what is your name?");
//   greeting.position(20,5);
  
//   textAlign(CENTER);
//   textSize(50);
//   stroke(0);
//   fill(255,215,0);
  
// }


// function greet(){
//   var name = input.value();
//   for(var i= 0; i< 200 ; i++){
//     push();
//     translate(random(width),random(height));
//     rotate(random(TWO_PI));
//     text(name,0,0);
//     pop();
//   }
//   input.value("");//clear the input box
// }

/*part 4 slider RGB * /

var rslide;
var gslide;
var bslide;

function setup(){
  createCanvas(640,400);
  rslider = createSlider(0,255,100);
  gslider = createSlider(0,255,100);
  bslider = createSlider(0,255,100);
}

function draw(){
  var r = rslider.value();
  var g = gslider.value();
  var b = bslider.value();
  background(r,g,b);
}
/**/
// var fingers;
// var button;
// var playing;

// function setup(){
//   fingers = createVideo("fingers.webn");
//   button = createButton("play");
//   button.mousePressed(toggle);
//   fingers.loop();
//   playing = false;
// }

// function toggle(){
//   if(playing){
//     fingers.pause();
//     button.html("play");
//   } else{
//     fingers.loop();
//     button.html("pause");
//   }
//   playing = !playing;
  
// }

// var fingers;
// function setup(){
//   createCanvas(640,480);
//   fingers = createVideo("fingers.webn");
//   fingers.loop();
//   fingers.hide();
// }

// function  draw(){
//   background(200);
//   image(fingers,30,30);
//   filter("INVERT");
//   image(fingers,130,130);
// }

/*part 6 webcam
capture = video
*/

// var capture;

// function setup(){
//   createCanvas(640,480);
//   capture = createCapture();
//   capture.hide();
//   noStroke();
//   fill(0);
// }

// function  draw(){
//   background(200);
//   capture.loadPixels();
  
//   var stepSize = 5;
//   for (var y =0; y< capture.height ; y+= stepSize){
//     for(var x=0; x < capture.width; x+= stepSize){
//       var i = y * capture.width + x;
//       var darkness = (255 - capture.pixels[i*4])/255;
//       var radius = stepSize * darkness;
//       ellipse(x,y,radius,radius);
//     }
//   }
// }

/*chapter 7 */
var mic;

function setup(){
  createCanvas(640,480);
  mic = new p5.AudioIn();
  mic.start();

}
function draw(){
  background(0);
  
  //if(millis() > 4000){
	  var vol = mic.getLevel();
	  var h = map(vol,0,0.2,height,0);
	  ellipse(width/2,h-20,100,100);
  //}
}

/*adding voice volume to stepSize*/
// var capture;
// var mic;

// function setup(){
//   createCanvas(640,480);
//   capture = createCapture();
//   capture.hide();
//   noStroke();
//   fill(0);
//   mic  = new p5.AudioIn();
//   mic.start();
// }

// function  draw(){
//   background(200);
//   capture.loadPixels();
  
//   var stepSize = round(map(mic.getLevel(),0,0.5,10,50));
//   for (var y =0; y< capture.height ; y+= stepSize){
//     for(var x=0; x < capture.width; x+= stepSize){
//       var i = y * capture.width + x;
//       var darkness = (255 - capture.pixels[i*4])/255;
//       var radius = stepSize * darkness;
//       ellipse(x,y,radius,radius);
//     }
//   }
// }