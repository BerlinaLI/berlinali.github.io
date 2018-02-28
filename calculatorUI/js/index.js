var keys = ["c","%","÷","x",7,8,9,"-",4,5,6,"+",1,2,3,".",0,".",".","="];  
var dataKeys = [];

//create duplicate dom element
var createKeyboardDom = function() {
  var output = '', 
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
    output+= '<button class="button" data=' + dataKeys[i] + '>' + keys[i] + '</button>';			
  }
  output+= '';

  keyboardList.innerHTML = output;



}();

//color styling
var createDomStyling = function(){
	var buttons = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		var dataAttr = button.getAttribute("data");
		if(dataAttr == "="){
			button.style.backgroundColor = "orange";
			button.style.marginTop = "-65px";
			button.style.position = "absolute";
			button.style.height = "130.5px";
			button.style.zIndex = "10";
		}
		//if it is a number,background color is grey;
		var matches = dataAttr.match(/\d+/g);
		if (matches != null) {
			button.style.backgroundColor = "#999";
		}
	}
}();


var arr = [];

var calculate = function(){
  $( "#keyboard-wrapper button" ) //button
    .click(function() {
      var value = $( this ).attr("data");
      arr.push(value);
      console.log(arr);

      if(value !== "=" && value !== "clear"){
      	$( ".click-row" ).text( value );
      }
      $( ".arr-row" ).text(arr.join("") ); 

      //when click = ,output result 
      if(value == "="){
      	arr.pop();
      	var result = eval(arr.join(""));
	  		console.log(result);
	  		var arrText = arr.join("")+"="+ result;
	  		$( ".click-row" ).text( result );
	  		$( ".arr-row" ).text(arrText ); 
	  		arr = [result.toString()];
      }

	  //when click = ,clear result
      if(value == "clear"){
        arr=[];
    		console.log(arr);
    	  $( ".click-row" ).text("0");
    	  $( ".arr-row" ).text("0"); 
      }
    }) 
}();



try {
  calculate;
} catch (e) {
  console.log(e.name + ': ' + e.message);
}


