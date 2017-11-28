const IMAGES = document.querySelectorAll(".photoAlbum img");
console.log(IMAGES);

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight; 

for(var i = 0; i< IMAGES.length; i++){
	let imgWidth = IMAGES[i].clientWidth;
	let imgHeight = IMAGES[i].clientHeight;

	IMAGES[i].style.left = Math.random() * (windowWidth - imgWidth) +"px";
	IMAGES[i].style.top = Math.random() * (windowHeight - imgHeight) +"px";
	IMAGES[i].style.zIndex = Math.floor(Math.random()*IMAGES.length);
	console.log("left : " + IMAGES[i].style.left + " top : " + IMAGES[i].style.top + " zIndex : "+IMAGES[i].style.zIndex);
}

// $(".photoAlbum").show();