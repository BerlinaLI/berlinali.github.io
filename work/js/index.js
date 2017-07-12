//overlay play game/video 
var $overlay = $('<div class="overlay"></div>');
var $popup =  $('<div></div>');
var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');

// var elevatorVideo="https://www.youtube.com/embed/WIFG6bIdo7Q";
var elevatorVideo="http://player.youku.com/embed/XMjc0MDY0ODQ4MA==";
var taobaoVideo ="https://www.youtube.com/embed/fiJgCSeNmD4";
var gameLink= "https://berlinali.github.io/ibmcomputer/";

$overlay.append($popup);
$popup.append($content);
$popup.append($deleteIcon);
$('body').append($overlay);


//brainwave slider 
var image1 = "http://portfolioimg.oss-cn-hongkong.aliyuncs.com/brainwave/brainwave1_500x300.jpg";
var image2 = "http://portfolioimg.oss-cn-hongkong.aliyuncs.com/brainwave/brainwave2_500x300.jpg";
var image3 = "http://portfolioimg.oss-cn-hongkong.aliyuncs.com/brainwave/brainwave3_500x300.jpg";
var image4 = "http://portfolioimg.oss-cn-hongkong.aliyuncs.com/brainwave/brainwave4_500x300.jpg";
var $overlayimage = $('<div class="overlay"></div>');
var $slider = $('<div id="slider"></div>');
var $arrowleft = $('<a href="#" class="control_next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>');
var $arrowright = $('<a href="#" class="control_prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>');
var $ul=$('<ul></ul>');
//var $slidesimage=$('<li><img src="http://portfolioimg.oss-cn-hongkong.aliyuncs.com/brainwave/brainwave_500x300.jpg"></li>'+ '<li>SLIDE 2</li>'+ '<li>SLIDE 3</li>');
var $slidesimage=$('<li><img src='+image1+'></li>'+'<li><img src='+image2+'></li>'+'<li><img src='+image3+'></li>'+'<li><img src='+image4+'></li>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');

$slider.append($arrowleft);
$slider.append($arrowright);
$ul.append($slidesimage);
$slider.append($ul);
$slider.append($deleteIcon);  
$overlayimage.append($slider);
$('body').append($overlayimage);

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$(document).ready(function() {

  //animation when opens page
  setTimeout(function(){
    TweenMax.staggerTo([".centered-navigation-mobile-menu", ".nav-link", ".myname-mobile",".col-md-5",".col-md-12",".col-xs-12"], 0.25, {'opacity': 1,  x: 0}, .25);  
  }, 1000);


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

//switch language
  $('[lang="cn"]').hide();
  $('.switch-cn').removeClass("active");
  $('.switch-en').addClass("active");

  $('.switch-en').click(function() {
    $('[lang="cn"]').hide();
    $('[lang="en"]').show();
    $('.switch-cn').removeClass("active");
    $('.switch-en').addClass("active");
  });

  $('.switch-cn').click(function() {
    $('[lang="en"]').hide();
    $('[lang="cn"]').show();
    $('.switch-en').removeClass("active");
    $('.switch-cn').addClass("active");
  });

  //pop-up overlay element
  $('.pop-it-game').click(function(){
    $(".videoiframe").attr("src",gameLink);
    $(".videoiframe").css({"width":"380px","height":"520px","overflow":"visible", "margin":"5% auto"});
    $overlay.show();  
  });


  $('.pop-it-brainwave').click(function(){
    $overlayimage.show(); 
    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');
  });

  $('a.control_prev').click(function () {
    moveLeft();
  });

  $('a.control_next').click(function () {
    moveRight();
  });

  //close pop-up windows
  $(".deleteIcon").click(function() {
    $overlay.hide();
    $overlayimage.hide();
    $(".videoiframe").attr("src","");
    $(".videoiframe").css({"width":"","height":"","overflow":"","margin":""});
  });

//hover to change static image to GIF 
  if(screen.width > 720){
    $( ".static-image" ).hover(
      function() {
        var srcGif = $(this).attr("src2");
        console.log(srcGif);
        $( this ).attr("src", srcGif);    
      }, function() {
        var srcStatic = $(this).attr("src1");
        console.log(srcStatic);
        $( this ).attr("src", srcStatic);
      }
    );
  }

  // if(screen.width < 720){
  //     var srcGif = $( ".static-image" ).attr("src2");
  //   $(this).attr("src",srcGif);    
  // }


  //test mobile auto change from static image to gif 
  // var scrollHeight; 
  // var imageHeight;
  // switch case

  $('.more-info').click(function () {
    $(this).parents(".col-md-4" ).children(".projectCaption").slideToggle();
  });

  $('.single-info').click(function(){
    $(this).parents(".col-md-4" ).children(".projectCaption").slideToggle();
  })

});  

function moveLeft() {
  $('#slider ul').animate({
      left: + slideWidth
  }, 200, function () {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
  });
};

function moveRight() {
  $('#slider ul').animate({
      left: - slideWidth
  }, 200, function () {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
  });
}; 









//to-do
  // $(window).scroll(function() {       
  // if ($(window).scrollTop() > 260) {
  //   $('#nav').addClass('navbar-fixed');
  // }
  // else {
  //   $('#nav').removeClass('navbar-fixed');
  // }