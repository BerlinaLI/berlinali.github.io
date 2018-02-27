//$("input").val() = 2;
// var value = 2;
//$( "span" ).text( value );

// $( "input" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "p" ).text( value );
//   })
//   .keyup();

// $( "ul li" )
//   .keyup(function() {
//     var value = $( this ).data();
//     $( "p" ).text( value );
//   });

var arr = [];

function fireEvent(){ 
  $( ".num-wrapper ul li" )
    .click(function() {
      var value = $( this ).attr("data");
      arr.push(value);
      console.log(arr);

      if(value !== "="){
      	$( ".click span" ).text( value );
      }
      $( ".arr span" ).text(arr.join("") ); 
      
      if(value == "="){
      	arr.pop();
      	var result = eval(arr.join(""));
  		console.log(result);
  		var arrText = arr.join("")+"="+ result;
  		// $( ".result span" ).text( result );
  		$( ".click span" ).text( result );
  		$( ".arr span" ).text(arrText ); 
  		arr = [result.toString()];
      }
    }) 

  $(".clear")
    .click(function(){
    	arr=[];
    	console.log(arr);
    	$( ".result span" ).text("0");
    	$( ".click span" ).text("0");
    	$( ".arr span" ).text("0"); 
    })
};

fireEvent();