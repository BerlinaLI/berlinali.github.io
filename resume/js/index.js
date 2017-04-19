$(document).ready(function() {
   $('#nav-container').load('https://berlinali.github.io/header/index.html');

   setTimeout(function(){ 
   	 $('a.navresume').addClass("active");
   }, 0);
   
   $('#footer-container').load('https://berlinali.github.io/footer/index.html');
});
