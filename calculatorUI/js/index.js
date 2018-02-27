var num = [1,2,3,"+","-","="];

var socialList = function() {
  var output = '<ul>', 
    myList =document.getElementById("keyboard-wrapper");
  for(var i=0; i< num.length; i++){
    output+= '<li><button>' + num[i] + '</button></li>';
  }
  output+= '</ul>';

  myList.innerHTML = output;
}();