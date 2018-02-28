var keys = ["c","%","÷","x",7,8,9,"-",4,5,6,"+",1,2,3,"=",0,".","+/-"];  
var dataKeys = [];

//create duplicate dom element
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

//color styling
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


var arr = [];

var calculate = function(){
  $( "#keyboard-wrapper ul li button" ) //button
    .click(function() {
      var value = $( this ).attr("data");
      arr.push(value);
      console.log(arr);

      if(value !== "=" && value !== "clear"){
      	$( ".click-row span" ).text( value );
      }
      $( ".arr-row span" ).text(arr.join("") ); 

      //when click = ,output result 
      if(value == "="){
      	arr.pop();
      	var result = eval(arr.join(""));
	  		console.log(result);
	  		var arrText = arr.join("")+"="+ result;
	  		// $( ".result span" ).text( result );
	  		$( ".click-row span" ).text( result );
	  		$( ".arr-row span" ).text(arrText ); 
	  		arr = [result.toString()];
      }

	  //when click = ,clear result
      if(value == "clear"){
        arr=[];
    		console.log(arr);
    	  $( ".click-row span" ).text("0");
    	  $( ".arr-row span" ).text("0"); 
      }
    }) 
}();




