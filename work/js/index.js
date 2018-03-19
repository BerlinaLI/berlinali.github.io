//overlay play game/video 
var $overlay = $('<div class="overlay"></div>');
var $popup =  $('<div></div>');
var $content = $('<iframe class="videoiframe"  src="" frameborder="0" allowfullscreen></iframe>');
var $deleteIcon = $('<div class="deleteIcon"><i class="fa fa-close"></i></div>');
// var gameLink= "http://berlina.io/project/ibmcomputer/";

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
  // $('.pop-it-game').click(function(){
  //   $(".videoiframe").attr("src",gameLink);
  //   $(".videoiframe").css({"width":"380px","height":"520px","overflow":"visible", "margin":"5% auto"});
  //   $overlay.show();  
  // });


  $('.mobile-game-ban').hide();

  $('.mobile-game-ban').css({
    'position': 'fixed',
    'float': 'left',
    'top': '30%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'background': '#999',
    'text-align': 'left',
    'padding': '9.5px 12.1px',
    'color': '#fff',
    'border-radius': '3.9px',
    'font-size': '1.1rem'
  })

  $('.game-link').click(function(){
      var $width = screen.width;// $(window).width();
      // desktop 992
      if( $width > 990){
        console.log("desktop");
        $(".game-link").attr("href", "https://berlinali.github.io/pcgamebot/");
        $(".game-link").attr("target","_blank");
      }else{
        console.log("mobile");
        // $(".game-link").attr("href", "");
        $('.mobile-game-ban').show().delay(1200).fadeOut();
       }
   });



  //close pop-up windows
  $(".deleteIcon").click(function() {
    $overlay.hide();
    $overlayimage.hide();
    $(".videoiframe").attr("src","");
    $(".videoiframe").css({"width":"","height":"","overflow":"","margin":""});
  });

  //work detail slide toggle
  $(".scroll-down").click(function() {
    $(this).next().slideToggle("slow");
  });

});  
