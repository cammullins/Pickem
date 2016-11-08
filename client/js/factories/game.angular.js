myApp.factory('GameFactory', function($http){
  var factory = {};

  factory.getgames = function(callback){
    var
    $http({
      url : "https://www.mysportsfeeds.com/api/feed/pull/nfl/2016-2017-regular/full_game_schedule.json",
      method : 'GET',
      headers: {
        'Authorization': cmullins341:password
      }
    }).success(function(response){
      callback(response);
    })
  }

  return factory;
})
