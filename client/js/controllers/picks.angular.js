myApp.controller('picksController', function($scope, $location, $routeParams, GameFactory){

$scope.weeknumber = $routeParams.weeknumber;

  GameFactory.getgames($routeParams.weeknumber, function(response){

    $scope.games = response.games.body;
    // console.log($scope.games);
  })

$scope.pointValue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
$scope.exclude = function(){
  if (pV){

  }
}


})
