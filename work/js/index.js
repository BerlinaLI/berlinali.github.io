//nav active anchor
$(document).ready(function() {
  setTimeout(function(){
    TweenMax.staggerTo(".col-md-5",.25, {'opacity': 1,  x: 0}, .25); 
  }, 3000);

//to-do
  // $(window).scroll(function() {       
  // if ($(window).scrollTop() > 260) {
  //   $('#nav').addClass('navbar-fixed');
  // }
  // else {
  //   $('#nav').removeClass('navbar-fixed');
  // }

});

//pop-up windows when click video/game 
// var $overlay = $('<div class="overlay"></div>');
// var $popup =  $('<div></div>');
// var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
// var elevatorVideo="https://www.youtube.com/embed/WIFG6bIdo7Q";
// var taobaoVideo ="https://www.youtube.com/embed/fiJgCSeNmD4";
// var gameLink= "https://berlinali.github.io/ibmcomputer/";

// $overlay.append($popup);
// $popup.append($content);
// $('body').append($overlay);

// $(document).ready(function() {
//   //open pop-up windows
//   $('#pop-it-elevator, #elevator').click(function(){
//     $(".videoiframe").attr("src",elevatorVideo);
//     $overlay.show();  
//   });

//   $('#pop-it-bot, #taobao').click(function(){
//     $(".videoiframe").attr("src",taobaoVideo);
//     $overlay.show();  
//   });
  
//   $('#pop-it-game, #mindplus').click(function(){
//     $(".videoiframe").attr("src",gameLink);
//     $(".videoiframe").css({"width":"560px","height":"815px","overflow":"visible"});
//     $overlay.show();  
//   });

// //close pop-up windows
//   $overlay.click(function() {
//     $overlay.hide();
//     $(".videoiframe").attr("src","");
//     $(".videoiframe").css({"width":"560px","height":"315px","overflow":"visible"});
//   });
// });


var $overlay = $('<div class="overlay"></div>');
var $popup =  $('<div></div>');
var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');

var elevatorVideo="https://www.youtube.com/embed/WIFG6bIdo7Q";
var taobaoVideo ="https://www.youtube.com/embed/fiJgCSeNmD4";
var gameLink= "https://berlinali.github.io/ibmcomputer/";


$overlay.append($popup);
$popup.append($content);
$popup.append($deleteIcon);
$('body').append($overlay);

$(document).ready(function() {
  //open pop-up windows
  $('#pop-it-elevator').click(function(){
    $(".videoiframe").attr("src",elevatorVideo);
    $overlay.show();  
  });

  $('#pop-it-bot').click(function(){
    $(".videoiframe").attr("src",taobaoVideo);
    $overlay.show();  
  });
  
  $('#pop-it-game').click(function(){
    $(".videoiframe").attr("src",gameLink);
    $(".videoiframe").css({"width":"380px","height":"520px","overflow":"visible", "margin":"5% auto"});
      //  $(".videoiframe").css({"width":"450px","height":"650px","overflow":"visible", "margin":"10% auto"});
    $overlay.show();  
  });

//close pop-up windows
  $overlay.click(function() {
    $overlay.hide();
    $(".videoiframe").attr("src","");
    $(".videoiframe").css({"width":"","height":"","overflow":"","margin":""});
  });
});


