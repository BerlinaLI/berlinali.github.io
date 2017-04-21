$(document).ready(function() { 
  
  setTimeout(function(){ 
    TweenMax.staggerTo(".col-md-5", 0.25, {'opacity': 1,  x: 0}, .25);   
  }, 0.25);

  setTimeout(function(){ 
    TweenMax.staggerTo(".col-md-4", 0.4, {'opacity': 1,  x: 0}, .25);   
  }, 0.4);

  setTimeout(function(){ 
    TweenMax.staggerTo(".col-md-6", 0.6, {'opacity': 1,  x: 0}, .25);   
  }, 0.6);

});

