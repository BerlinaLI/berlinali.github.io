var keys = ["c","%","÷","x",7,8,9,"-",4,5,6,"+",1,2,3,"=",0,".","+/-"];  
var dataKeys = [];

var createKeyboardDom = function() {
  var output = '<ul>', 
    keyboardList =document.getElementById("keyboard-wrapper");
  
  for(var i=0; i< keys.length; i++){
  	//convert keyboard text to data for special case  
    switch (keys[i]) {
	    case "c":
	        dataKeys[i] = "clear";
	        break; 
	    case "÷":
	        dataKeys[i] = "/";
	        break; 
	    case "x":
	        dataKeys[i] = "*";
	        break; 
	    default: 
	        dataKeys[i] = keys[i];
		}
    output+= '<li><button class="button" data=' + dataKeys[i] + '>' + keys[i] + '</button></li>';			
  }
  output+= '</ul>';

  keyboardList.innerHTML = output;

  

}();

var createDomStyling = function(){
	var buttons = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		var dataAttr = button.getAttribute("data");
		if(dataAttr == "="){
			button.style.backgroundColor = "orange";
		}
		//if it is a number,background color is grey;
		var matches = dataAttr.match(/\d+/g);
		if (matches != null) {
			button.style.backgroundColor = "#999";
		}
	}
}();





// var x = document.getElementsByClassName("button");
// var i;
// for (i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "red";
// }