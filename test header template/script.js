$(document).ready(function() {
   $('#nav-container').load('https://berlinali.github.io/header #nav');
   setTimeout(function(){ 
   	 $('a.navwork').addClass("active");
   }, 500);
});