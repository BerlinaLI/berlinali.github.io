var gif;


function preload() {
  gif = loadGif('discoinvite.gif');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // gif = loadGif('discoinvite.gif');
}

function draw() {
  background(255);
  var imageheight = gif.height/gif.width * window.innerWidth;
  image(gif, 0, 0,window.innerWidth,gif.height/gif.width * window.innerWidth);
  
  noStroke();
	if(frameCount % 7 < 3 ){
	  noFill(); //pic 33%  12 
	} else if(frameCount % 7 > random(3,4) ){
		fill(255);//white 33% 56 
	} else{
		fill(0);//black 34% 
	}
	rect(0,0,window.innerWidth,window.innerHeight);
}



