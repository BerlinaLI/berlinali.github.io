$(document).ready(function() {
   $('#nav-container').load('https://berlinali.github.io/test%20header%20template/header.html #nav');
   setTimeout(function(){ 
   	 $('a.navresume').addClass("active");
   	 $('a.navwork').addClass("active");
   }, 0);
});