//overlay play game/video 
var $overlay = $('<div class="overlay"></div>');
var $popup =  $('<div></div>');
var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');
var gameLink= "https://berlina.io/ibmcomputer/";

$overlay.append($popup);
$popup.append($content);
$popup.append($deleteIcon);
$('body').append($overlay);


var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');
var isHomePage = $('.isHomePage').length ? true : false;
var isResumePage= $('.isResumePage').length ? true : false;

// var $images = $('img');


// $(document).ready(function () {
//     $('img').hide();
// });


$(window).on("load", function() {

  // $('img').show();

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
  // $('[lang="cn"]').hide();
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

  //click myname back to homepage 
  $('.myname').click(function(){
    window.open("https://berlina.io/work","_self");
  })

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
