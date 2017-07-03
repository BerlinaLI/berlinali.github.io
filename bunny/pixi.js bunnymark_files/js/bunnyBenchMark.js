$(document).ready(onReady)

$(window).resize(resize)
window.onorientationchange = resize;


//when no people interact for 10s, redirect to the scratch card page again. 
// var idleSeconds = 15;
// $(function(){
//   var idleTimer;
//   function resetTimer(){
//     clearTimeout(idleTimer);
//     idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
//   }
//   $(document.body).bind('mousemove keydown click',resetTimer); //space separated events list that we want to monitor
//   resetTimer(); // Start the timer when the page loads
// });

// function whenUserIdle(){
//    window.open("https://berlinali.github.io/scratchcard/","_self");
// }

var width = $(window).width();
var height = $(window).height();

var wabbitTexture;
var pirateTexture;

var bunnys = [];
var gravity = 0.5//1.5 ;

var maxX = width;
var minX = 0;
var maxY = height;
var minY = 0;

var startBunnyCount = 2;
var isAdding = false;
var count = 0;
var container;
var pixiLogo;
var clickImage;

var amount = 100;

function onReady()
{
	
	renderer = PIXI.autoDetectRenderer(800, 700, {backgroundColor:0xFFFFFF});
	stage = new PIXI.Stage(0xFFFFFF);

	amount = (renderer instanceof PIXI.WebGLRenderer) ? 100 : 5;

	if(amount == 5)
	{
		renderer.context.mozImageSmoothingEnabled = false
		renderer.context.webkitImageSmoothingEnabled = false;
		
	}
	
	renderer.view.style["transform"] = "translatez(0)";
	document.body.appendChild(renderer.view);
	renderer.view.style.position = "absolute";
	stats = new Stats();
	
	document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "absolute";
	stats.domElement.style.top = "0px";
	requestAnimationFrame(update);
	
	wabbitTexture = new PIXI.Texture.fromImage("assets/bunnys.png")

	counter = document.createElement("div");
	counter.className = "counter";
	document.body.appendChild( counter);
	
	pixiLogo = document.getElementById("pixi");
	clickImage = document.getElementById("clickImage");
	
	count = startBunnyCount;
	counter.innerHTML = count + " BUNNIES";
	
	
	container = new PIXI.DisplayObjectContainer();
	container = new PIXI.ParticleContainer(200000, [false, true, false, false, false]);
	stage.addChild(container);

	bunny1 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 47, 26, 37)); //(x, y, width, height).
	bunny2 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 86, 26, 37));
	bunny3 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 125, 26, 37));
	bunny4 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 164, 26, 37));
	bunny5 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 2, 26, 37));

	bunnyTextures = [bunny1, bunny2, bunny3, bunny4, bunny5];
	bunnyType = 2;
	currentTexture = bunnyTextures[bunnyType];

	for (var i = 0; i < startBunnyCount; i++) 
	{
		var bunny = new PIXI.Sprite(currentTexture);
		bunny.speedX = Math.random() * 10;
		bunny.speedY = (Math.random() * 10) - 5;
		
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 1;

		bunnys.push(bunny);			

		container.addChild(bunny);
	}
	
	
	$(renderer.view).mousedown(function(){
		isAdding = true;	
	});
	
	$(renderer.view).mouseup(function(){
		bunnyType++
		bunnyType %= 5;
		currentTexture = bunnyTextures[bunnyType];
		isAdding = false;
	})
	
	document.addEventListener("touchstart", onTouchStart, true);
	document.addEventListener("touchend", onTouchEnd, true);
	
	resize();

	playYay();

	playBgm();

}


function playBgm(){
	myAudio = new Audio('assets/bgm.mp3'); 
	myAudio.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	//myAudio.play();
}


function playYay(){
	var audio = document.getElementById('audio');
	var button = document.getElementById('play-button');
	button.addEventListener('click',function(){
		if (audio.paused) {
	        audio.play();
	    }else{
	        audio.currentTime = 0 //if keep pressing
	    }
	});
}

function onTouchStart(event)
{
	isAdding = true;
	console.log("sound on");
}


function onTouchEnd(event)
{
	bunnyType++
	bunnyType %= 5;
	currentTexture = bunnyTextures[bunnyType];
	isAdding = false;
}

function resize()
{

	var width = $(window).width(); 
	var height = $(window).height(); 
	
	renderer.view.style.left = 0
	renderer.view.style.top = 0
	renderer.resize(width, height);
}

function update()
{
	stats.begin();
	if(isAdding)
	{
		// add 10 at a time :)
		
		if(count < 200000)
		{

			for (var i = 0; i < amount; i++) 
			{
				var bunny = new PIXI.Sprite(currentTexture);
				bunny.speedX = Math.random() * 5;
				bunny.speedY = (Math.random() * 5) - 5;
				bunny.anchor.y = 1;
				//bunny.alpha = 0.3 + Math.random() * 0.7;
				bunnys.push(bunny);
				bunny.scale.set(0.5 + Math.random()*0.5);

				bunny.rotation = (Math.random()-0.5)
			
				//bunny.rotation = Math.random() - 0.5;
				var random = Math2.randomInt(0, container.children.length-2);
				container.addChild(bunny)//, random);
				
				count++;
			}
		}
	
		
		counter.innerHTML = count + " BUNNIES";
	}
	
	for (var i = 0; i < bunnys.length; i++) 
	{
		var bunny = bunnys[i];
		//bunny.rotation += 0.1
	
		bunny.position.x += bunny.speedX;
		bunny.position.y += bunny.speedY;
		bunny.speedY += gravity;
		bunny.width = 26;
		bunny.height = 37;
		
		if (bunny.position.x + bunny.width> maxX)
		{
			bunny.speedX *= -1;
			bunny.position.x = maxX - bunny.width;
		}
		else if (bunny.position.x < minX)
		{
			bunny.speedX *= -1;
			bunny.position.x = minX;
		}
		
		if (bunny.position.y > maxY)
		{
			bunny.speedY *= -0.65;
			bunny.position.y = maxY ;
			bunny.spin = (Math.random()-0.5) * 0.2
			if (Math.random() > 0.5)
			{
				bunny.speedY -= Math.random() * 6;
			}
		} 
		else if (bunny.position.y < minY)
		{
			bunny.speedY = 0;
			bunny.position.y = minY;
		}
		
	}
	
	renderer.render(stage);
	requestAnimationFrame(update);
	stats.end();
}
