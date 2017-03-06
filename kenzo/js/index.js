var reference =[
  {
  author: "-- Ryuichi Sakamoto --",
  quote: "I don't want to repeat my past. So I have to experience more different things which I have never done before.",
  pic: "http://culturemagazin.com/wp-content/uploads/1611-HM-KENZO-7.jpg"
  },{
   author: "-- Chloe Sevigny --",
   quote: "When I am modeling, I usually feel like overcompensating. Striking a crazy pose. Because I can crack it.",
   pic: "http://culturemagazin.com/wp-content/uploads/1611-HM-KENZO-4.jpg"
  },{
   author:"-- Rosario Dawson --",
   quote:"fashion and styling is a way to express yourself even before you open your month.",
   pic:"http://culturemagazin.com/wp-content/uploads/1611-HM-KENZO-3.jpg"
  }
];

function randomRef(){
  var index = Math.floor(reference.length * Math.random() ); 
  document.getElementById("quote").innerHTML = reference[index].quote; 
  document.getElementById("author").innerHTML = reference[index].author; 
  document.getElementById("pic").src=reference[index].pic;
}              
              
function myFunction() { 
  randomRef(); 
}



// var quotes =["dd","duuuuuuuuuuuuud","qeeeeeeeeeeeeee"];

// function randomQuote(value){
//   var index = Math.floor(value.length * Math.random() ); 
//    return quotes[index];
// }              
              
// function myFunction() { 

//   document.getElementById("demo").innerHTML = randomQuote(quotes) ;
//   //document.getElementById("pic").src="https://i1.wp.com/itsallstyletome.com/wp-content/uploads/2016/05/kenzoxhm-lookbook-amy-sall-and-juliana-huxtable.jpg?fit=1024%2C768";
// }