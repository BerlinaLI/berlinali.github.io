/**
 * Created by singhdi on 2014-07-26.
 */
// if( screen.width > 500){
// // window.open("https://berlinali.github.io/scratchcard/scancode.html","_self");
//     window.location = "https://berlinali.github.io/gongzhonghao/";
// }else{



alert("不停往下拉体验更多的红！\nKeep scrolling for infinite RED!");

var app = angular.module("ionicInfiniteScrollApp",['ionic']);

app.controller("InfiniteAppCntrl",function($scope){
    $scope.moredata = false;
debugger;
    $scope.loadMoreData=function()
    {
        $scope.items.push({id: $scope.items.length});
        if($scope.items.length==100)
        {
            $scope.moredata=true;
        }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.items=[];

});

// 音乐播放
    function autoPlayMusic() {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            musicPlay(true);
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            musicPlay(true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                musicPlay(true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    function musicPlay(isPlay) {
        var audio = document.getElementById('musicid');
        if (isPlay && audio.paused) {
            audio.play();
        }
        if (!isPlay && !audio.paused) {
            audio.pause();
        }
    }
    autoPlayMusic();

// }