//once click, switch to google website with alert 
//once hover, it moves

$( "#googlelogo" ).click(function() {

var alertText = 
"<div>*===================================*</br>\
<strong>1 mins 4 step to spin your own Google LOGO</br></strong>\
*===================================*</br></div></br>\
<div>[STEP1]</br>Copy the text below</div>\
<div>[STEP2]</br>Rightclick on the Google page and select <Inspect>.</div>\
<div>[STEP3]</br>Find <console> and paste the text in the blank there.</div>\
<div>[STEP4]</br>Hit ENTER! You are ready to go.</div></br>\
*Here is the text to copy*</br>javascript: (function(e, s) {</br>\
   \xa0 e.src = s;</br>\
    \xa0e.onload = function() {</br>\
       \xa0 jQuery.noConflict();</br>\
    };</br>\
    document.head.appendChild(e);</br>\
})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')</br>\
var deg = 0;</br>\
setInterval(rotate_my_big_ass_gear, 100);</br>\
function rotate_my_big_ass_gear() {</br>\
    jQuery('div#hplogo').css({</br>\
        'transform': 'rotate(' + (deg++) + 'deg)',</br>\
        '-moz-transform': 'rotate(' + (deg++) + 'deg)',</br>\
        '-o-transform': 'rotate(' + (deg++) + 'deg)',</br>\
        '-webkit-transform': 'rotate(' + (deg++) + 'deg)' </br>\
    });</br>\
};</br>\
</div>";

function myInstruction() {
    var myWindow = window.open("", "MsgWindow", "width=500,height=700,resizable=yes,top=0,left=0");
    myWindow.document.write(alertText);
}

function openGoogle() {
    var myWindow = window.open("http://www.google.com", "_blank", "width=600,height=600,resizable=yes,top=0,left=650");   
};

myInstruction();

setTimeout(function(){ 
    openGoogle();
}, 3000);

});

