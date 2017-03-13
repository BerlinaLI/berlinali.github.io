$(document).ready(function() {
   $('#nav-container').load('https://berlinali.github.io/header #nav');
   setTimeout(function(){ 
   	 $('a.navresume').addClass("active");
   }, 0);
});