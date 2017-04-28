//overlay play game/video 
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

  //animation when opens page
  setTimeout(function(){
    TweenMax.staggerTo([".centered-navigation-mobile-menu", ".nav-link", ".myname-mobile",".col-md-5",".col-md-12",".col-xs-12"], 0.25, {'opacity': 1,  x: 0}, .25);  
  }, 1000);

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
    $overlay.show();  
  });

//close pop-up windows
  $overlay.click(function() {
    $overlay.hide();
    $(".videoiframe").attr("src","");
    $(".videoiframe").css({"width":"","height":"","overflow":"","margin":""});
  });


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






//to-do
  // $(window).scroll(function() {       
  // if ($(window).scrollTop() > 260) {
  //   $('#nav').addClass('navbar-fixed');
  // }
  // else {
  //   $('#nav').removeClass('navbar-fixed');
  // }