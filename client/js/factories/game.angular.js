myApp.factory('GameFactory', function($http){
  var factory = {};

  factory.getgames = function(weeknumber, callback){
    console.log(weeknumber);
    $http.get('/getgames/' + weeknumber).success(function(response){
      callback(response);
    });
  }

  return factory;
})
