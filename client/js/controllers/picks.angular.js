myApp.controller('picksController', function($scope, $location, GameFactory){

  GameFactory.getgames(function(response){
    $scope.games = response;
  })

$scope.pointValue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
$scope.exclude = function(){
  if (pV){

  }
}


})
