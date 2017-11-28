const IMAGES = document.querySelectorAll(".photoAlbum img");
const photoAlbum = document.querySelector(".photoAlbum");
const photoDetail = document.querySelector(".photoDetail");
const textArea = document.querySelector("textArea");
const submitButton = document.querySelector("input[value='SUBMIT']");
const exitButton = document.querySelector(".deleteIcon");
const bigImg =  document.querySelector(".bigImg");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight; 

submitButton.disabled = true;


showAlbum();



function showAlbum(){

	photoDetail.style.display = "none";
	photoAlbum.style.display = "block";

	for(var i = 0; i< IMAGES.length; i++){
		let imgWidth = IMAGES[i].clientWidth;
		let imgHeight = IMAGES[i].clientHeight;

		IMAGES[i].style.left = Math.random() * (windowWidth - imgWidth) +"px";
		IMAGES[i].style.top = Math.random() * (windowHeight - imgHeight) +"px";
		IMAGES[i].style.zIndex = Math.floor(Math.random()*IMAGES.length);
		//console.log("left : " + IMAGES[i].style.left + " top : " + IMAGES[i].style.top + " zIndex : "+IMAGES[i].style.zIndex);
	}


	for(var i = 0; i< IMAGES.length; i++){
		let img = IMAGES[i];
		img.addEventListener("click", function(){
			let bigImgSrc = getBigImgSrc(img);
			bigImg.setAttribute("src", bigImgSrc); 
			photoAlbum.style.display = "none";
			photoDetail.style.display = "block";

		});
	}
}

// function showBigImg(){
	
// }


function getBigImgSrc(img){
	let imgSrc = img.getAttribute("src");
    imgSrc = imgSrc.slice(0,-7) + "1200.png";
    console.log(imgSrc);
    return imgSrc;
}


function leaveMessage(){
	if(textArea.value.length > 0){
		submitButton.disabled = false;
		textArea.style.borderColor = "blue";
		submitButton.style.color ="white";
		submitButton.style.backgroundColor ="green";	
	}else{
		submitButton.disabled = true;
		textArea.style.borderColor = "grey";
		submitButton.style.color ="black";
		submitButton.style.backgroundColor ="grey";	
	}
}


function submitMessage(){
	let message = textArea.value;
	console.log(message);

	//delete animation
	closeDetailPage();
	
}


function closeDetailPage(){
	photoDetail.style.display = "none";
	photoAlbum.style.display = "block";
}


textArea.addEventListener("keyup",leaveMessage);
submitButton.addEventListener("click",submitMessage);
exitButton.addEventListener("click",closeDetailPage);