$(document).ready(function() { 
   $('#footer-container').load('https://berlinali.github.io/footer/index.html');
     setTimeout(function(){ 
    TweenMax.staggerTo(".col-md-5", 0.25, {'opacity': 1,  x: 0}, .25);   
  }, 0.5);
});
