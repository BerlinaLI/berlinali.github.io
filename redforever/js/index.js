/**
 * Created by singhdi on 2014-07-26.
 */
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