$(document).ready(function() { 
	//animation when open the page

  TweenMax.staggerTo([".centered-navigation-mobile-menu", ".nav-link", ".myname-mobile",".col-md-5",".col-md-4",".col-md-6",".col-md-12",".col-xs-12"], 0.25, {'opacity': 1,  x: 0}, .25);  
  // TweenMax.staggerTo([".centered-navigation-mobile-menu", ".nav-link", ".myname-mobile",".col-md-5",], 0.25, {'opacity': 1,  x: 0}, .25); 
  // TweenMax.staggerTo(".col-md-4", 0.6, {'opacity': 1,  x: 0}, .6);     
  // TweenMax.staggerTo(".col-md-6", 0.7, {'opacity': 1,  x: 0}, .7);  


  //mobile-menu-toggle
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

});




// (function() {
//   var canvas = document.getElementById('myCanvas'),
//       ctx = canvas.getContext('2d');

//   window.addEventListener('resize', resizeCanvas, false);

//   function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     drawStuff(); 
//   }
//   resizeCanvas();
// /*
// =============================
// main code here
// =============================
// */
//   function drawStuff() {
   
//     window.addEventListener('load', function () {
// 	    var img = new Image,
// 	    ctx = document.getElementById('myCanvas').getContext('2d');

// 	    img.src = 'http://images.cnblogs.com/cnblogs_com/wei-li/201204/201204181848531509.jpg';

// 	    var width = img.naturalWidth,
// 	    height = img.naturalHeight;

// 	    img.addEventListener('load', function () {

// 	      var interval = setInterval(function() {
// 	        var x = 0, y = 0,speed_x = 1,speed_y = 1;

// 	        return function () {
// 	          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
// 	          ctx.drawImage(img, x, y);

// 	          x = x+ speed_x;
// 	          y = y+ speed_y;
// 	          if (x + width > ctx.canvas.width  || x < 0) {
// 	            speed_x = speed_x *-1;
// 	          }
// 	           if (y + height > ctx.canvas.height || y < 0) {
// 	            speed_y = speed_y *-1;
// 	          }
// 	        };
// 	      }(), 1000/40);
// 	    }, false);
// 	  }, false);
//   }
// })();




