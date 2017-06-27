if( screen.width > 500){
  window.open("https://berlinali.github.io/bunny/scancode.html","_self");
}else{

  var mousedown = false;
  var bodyStyle = document.body.style;
  bodyStyle.mozUserSelect = 'none';
  bodyStyle.webkitUserSelect = 'none';

  var i= 0;
  var imgGenerateSpeed = 200;
  var imgScrollSpeed = 2000;
  var arcSize = 40;

  var imgs = [
    'p_0.jpg',
    'p_0.jpg',
    // 'p_0.jpg',
    // 'p_0.jpg',
    'p_1.jpg'
  ];

  var hints = [
    '请在以上的刮奖区刮奖',
    '再给你一次机会刮奖',
    '不中，再给你一次机会',
    // '好吧，老板说把奖放在第5个...',
    // '呵呵，都说我不是骗子啦'
  ];


  function draw(i){

    if(i<3){
      //if(i<2){
      var canvas = ( function createCanvas() {
        var canvas = document.createElement('canvas'); // <canvas></canvas>
        var div = document.createElement('div');       // <div></div>
        div.appendChild(canvas);                       //
        document.body.appendChild(div);//<body><div><canvas>...</canvas></div></body>

        canvas.id = i;
        canvas.style.backgroundColor='transparent';
        canvas.style.margin = '55px auto';
        canvas.style.display='block';
        return canvas;
      })();

      (function initImg(canvas){
        var  img = new Image();
        img.src = imgs[i]; //i - index
        img.addEventListener('load',function(e){
            drawScratchCard(e, canvas);
        });
      })(canvas);

      //explaination added below the scratch card
      // var p = document.createElement('p');
      // p.id="status";
      // p.textContent = hints[i];
      // document.body.appendChild(p);

      //jQuery scroll down feature
      if(i>0){
        jQuery('html, body').animate({
          scrollTop: jQuery("canvas#"+i).offset().top + $( "canvas" ).height()
        }, imgScrollSpeed);
      }

    }else{
      jumpToAnimation();
    }
  };


  function drawScratchCard(e, canvas){

      var img = e.target;
      var ctx;
      var w = img.width,
          h = img.height;

      canvas.width=w;
      canvas.height=h;
      canvas.style.backgroundImage='url('+img.src+')';

      ctx=canvas.getContext('2d');
      // ctx.fillStyle = 'gray';
      // ctx.fillRect(0, 0, w, h);

      layer(ctx,w,h);

      ctx.globalCompositeOperation = 'destination-out';

      attachEvent(canvas, ctx);
  }

  function layer(ctx,w,h){
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, w, h);
  }

  function attachEvent(canvas, ctx) {
      canvas.addEventListener('touchstart', handlerEventDown.bind({canvas: canvas, ctx: ctx}));
      canvas.addEventListener('touchmove', handlerEventMove.bind({canvas: canvas, ctx: ctx}));
      canvas.addEventListener('touchend', handlerEventUp.bind({canvas: canvas, ctx: ctx}));
  }


  function handlerEventDown(e){
    e.preventDefault();
    mousedown=true;
  }


  function handlerEventUp(e){
    e.preventDefault();
    mousedown=false;
  }


  function handlerEventMove(e){
    e.preventDefault();
    var offsetX = this.canvas.offsetLeft,
        offsetY = this.canvas.offsetTop;

    if(mousedown) {
      if(e.changedTouches){
        e=e.changedTouches[e.changedTouches.length-1];
      }

      var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0; //question
      var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;

      with(this.ctx) {//question
           beginPath();
           arc(x, y, arcSize, 0, Math.PI * 2);
           closePath();
           fill();
      }
    }

    //if the erased area percentage is > 0.5, clear the layer and generate new one
    var imgData = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
    var pixelsArr= imgData.data;
    var loop = pixelsArr.length;
    var transparent = 0;

    for(var j=0; j<loop ; j+=4){
      var alpha = pixelsArr[j+3];
      if(alpha<10){
        transparent++;
      }
    }
    var erasePercentage = transparent/(loop/4);
    var mouseAt = parseInt(e.target.id);
    //console.log("I = "+i,"mouse at = "+mouseAt,erasePercentage>.5);

    if(i == mouseAt && erasePercentage >.4){
      setTimeout(() => {
        //console.log("action 1");
        this.ctx.rect(0, 0, 320, 160);
        this.ctx.fill();
      }, imgGenerateSpeed*0.1);

      setTimeout(function(){
        //console.log("action 2");
        draw(mouseAt+1);
      }, imgGenerateSpeed);

      i++;
      return i;
    }
  }


  function jumpToAnimation(){
    $('canvas').fadeOut("slow");
    setTimeout(function(){
      window.open("http://www.goodboydigital.com/pixijs/bunnymark_v3/","_self");
    }, 0);
  }


  draw(i);


}

