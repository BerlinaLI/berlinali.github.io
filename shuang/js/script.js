const IMAGES = document.querySelectorAll(".photoAlbum img");
const photoAlbum = document.querySelector(".photoAlbum");
const photoDetail = document.querySelector(".photoDetail");
const textArea = document.querySelector("#textArea");
const submitButton = document.querySelector(".submitButton");
const exitButton = document.querySelector(".deleteIcon");
const bigImg =  document.querySelector(".bigImg");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight; 

submitButton.disabled = true;


showAlbum();


function openAlbumPage(){
	photoDetail.style.display = "none";
	photoAlbum.style.display = "block";
}

function openDetailPage(){
	photoAlbum.style.display = "none";
	photoDetail.style.display = "block";
}

function closeDetailPage(){
	photoDetail.style.display = "none";
	photoAlbum.style.display = "block";
}


function showAlbum(){

	openAlbumPage();

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
			openDetailPage();
		});				
	}
}


function getBigImgSrc(img){
	let imgSrc = img.getAttribute("src");
    imgSrc = imgSrc.slice(0,-7) + "1200.png";
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
	//save message 
	let message = textArea.value;
	// console.log("previous msg : " + message);

	//clear message
	message = "";
	// console.log("clear msg : " + message);
	// console.log(message);

	//delete animation
	deleteSmallImage();

	closeDetailPage();
}

function deleteSmallImage(){
	let bigImgSrc = bigImg.getAttribute("src");	
    let smallImgSrc = bigImgSrc.slice(0,-8) + "300.png";
    let smallImgSelector = 'img[src="' + smallImgSrc + '"]';
    let smallImg = document.querySelector(smallImgSelector);
    smallImg.setAttribute("src","");
	smallImgSrc = smallImg.getAttribute("src");
	console.log("selectimg 2: " + smallImgSrc);
}


textArea.addEventListener("keyup",leaveMessage);
submitButton.addEventListener("click",submitMessage);
exitButton.addEventListener("click",closeDetailPage);
