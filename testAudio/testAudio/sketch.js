var mic;

function setup() {
  createCanvas(640,400);
  mic = new p5.AudioIn();
  mic.start();
 }

function draw() {
  background(200);
  var vol = mic.getLevel();

	var h = map(vol,0,0.05,height,0);
	ellipse(width/2, h-25,50,50);
	
	fill(50);
	text(vol*100, 10, 10, 70, 80); 
}