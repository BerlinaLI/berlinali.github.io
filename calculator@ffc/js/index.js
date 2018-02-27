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
  $( "ul li" )
    .click(function() {
      var value = $( this ).attr("data");
      $( ".click span" ).text( value );
      arr.push(value);
      //arr.push(parseInt(value));
      $( ".arr span" ).text(arr.join("") );
      console.log(arr);
      
//       if(value == "="){
  
//       }
    })  
};

fireEvent();