(function() {
  var canvas = document.getElementById('myCanvas'),
      ctx = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  resizeCanvas();
  drawStuff(); 

  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawStuff() {
   
    window.addEventListener('load', function () {
    var img = new Image,
    ctx = document.getElementById('myCanvas').getContext('2d');

    img.src='http://bizcard.oss-cn-beijing.aliyuncs.com/wechatcode1.png';

    img.addEventListener('load', function () {

      var interval = setInterval(function() {
        var x = 0, y = 0,speed_x = 3,speed_y = 3;

        return function () {
         
          var width = img.naturalWidth,
          height = img.naturalHeight;
          console.log(width,height);
          
          // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(img, x, y);
          
          x = x+ speed_x;
          y = y+ speed_y;
          if (x + width > ctx.canvas.width  || x < 0) {
            speed_x = speed_x *-1;
          }
           if (y + height > ctx.canvas.height || y < 0) {
            speed_y = speed_y *-1;
          }
        };
      }(), 800);
    }, false);
  }, false); 
    


  function to_image(){
    var canvas = document.getElementById("myCanvas");
    document.getElementById("theimage").src = canvas.toDataURL();
    Canvas2Image.saveAsPNG(canvas);
  }


  // setTimeout(function(){ 
  //   to_image();
  // }, 2000);

   
  }
})();







