//nav active anchor

$(document).ready(function() {



    //TweenMax.staggerTo(".row:nth-child(1)",.25, {'opacity': 1,  x: 0}, .75); 

  setTimeout(function(){ 
     TweenMax.staggerTo(".col-md-5:nth-child(1)",.5, {'opacity': 1,  x: 0}, 1.5); 
     TweenMax.staggerTo(".col-md-5:nth-child(2)",.5, {'opacity': 1,  x: 0}, 1.75); 
  // $("#nav-container").load('https://berlinali.github.io/header/index.html');
  },1500);
  // setTimeout(function(){ 
  //  	 $("a.navwork").addClass("active");
  // 

  // $(window).scroll(function() {       
  //   if ($(window).scrollTop() > 160) {
  //     $('#nav-container').addClass('navbar-fixed');
  //   }
  //   else {
  //     $('#nav-container').removeClass('navbar-fixed');
  //   }
  // });    

});


//pop up video 
var $overlay1 = $('<div class="overlay"></div>');
var $popup1 =  $('<div></div>');
var $content1 = $('<iframe class="videoiframe" width="560" height="315" src="https://www.youtube.com/embed/WIFG6bIdo7Q" frameborder="0" allowfullscreen></iframe>');

$overlay1.append($popup1);
$popup1.append($content1);
$('body').append($overlay1);

$overlay1.hide();

$(document).ready(function() {
    $('#pop-it-elevator, #elevator').click(function(){
      $overlay1.show();  
    });
    $overlay1.click(function() {
      $overlay1.hide();
    });
});

// pop-it-bot
var $overlay2 = $('<div class="overlay"></div>');
var $popup2 =  $('<div></div>');
var $content2 = $('<iframe class="videoiframe" width="560" height="315" src="https://www.youtube.com/embed/fiJgCSeNmD4" frameborder="0" allowfullscreen></iframe>');

$overlay2.append($popup2);
$popup2.append($content2);
$('body').append($overlay2);

$overlay2.hide();

$(document).ready(function() {
    $('#pop-it-bot, #taobao').click(function(){
      $overlay2.show();  
    });
    $overlay2.click(function() {
      $overlay2.hide();
    });
});


/*game*/
function playGame(){
  var $overlay3 = $('<div class="overlay"></div>');
  var $popup3 =  $('<div></div>');
  var $content3 = $('<iframe class="gameframe" width="760" height="1200" src="https://berlinali.github.io/ibmcomputer/" frameborder="0" allowfullscreen></iframe>');

  $overlay3.append($popup3);
  $popup3.append($content3);
  $('body').append($overlay3);

  $overlay3.hide();

  $('#pop-it-game, #mindplus').click(function(){
      $overlay3.show();  
    });
    $overlay3.click(function() {
      $overlay3.hide();
  });
}

$(document).ready(function() {
   playGame();
});





