//overlay play game/video 
var $overlay = $('<div class="overlay"></div>');
var $popup =  $('<div></div>');
var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');
var gameLink= "http://berlina.io/project/ibmcomputer/";

$overlay.append($popup);
$popup.append($content);
$popup.append($deleteIcon);
$('body').append($overlay);


var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');
var isHomePage = $('.isHomePage').length ? true : false;
var isResumePage= $('.isResumePage').length ? true : false;


$(window).on("load", function() {

  if( isHomePage ){
  //automatic onclick html  (todo)
    // var pageClass = document.querySelector(".pageClass");
    // var pageID = pageClass.getAttribute("id");
    // var windowLocation = "window.location='"+ pageID + ".html'";
    // console.log(windowLocation);
    // pageClass.setAttribute("onClick",windowLocation);


    //animation when opens page
    setTimeout(function(){
       TweenMax.staggerTo([".openAnimation"], 0.25, {'opacity': 1,  x: 0}, .25);  
    }, 100);
  }

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


//toggle language
  $('[lang="cn"]').hide();
  // $('.switch-cn').removeClass("active");
  // $('.switch-en').addClass("active");

  // $('.switch-en').click(function() {
  //   $('[lang="cn"]').hide();
  //   $('[lang="en"]').show();
  //   $('.switch-cn').removeClass("active");
  //   $('.switch-en').addClass("active");
  // });

  // $('.switch-cn').click(function() {
  //   $('[lang="en"]').hide();
  //   $('[lang="cn"]').show();
  //   $('.switch-en').removeClass("active");
  //   $('.switch-cn').addClass("active");
  // });
  //pop-up overlay element
  $('.pop-it-game').click(function(){
    $(".videoiframe").attr("src",gameLink);
    $(".videoiframe").css({"width":"380px","height":"520px","overflow":"visible", "margin":"5% auto"});
    $overlay.show();  
  });

  //close pop-up windows
  $(".deleteIcon").click(function() {
    $overlay.hide();
    $overlayimage.hide();
    $(".videoiframe").attr("src","");
    $(".videoiframe").css({"width":"","height":"","overflow":"","margin":""});
  });





});  
