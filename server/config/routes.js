var users = require('./../controllers/users.js');
var games = require('./../controllers/games.js');

module.exports = function(app){
  // <!--Users Controller-->
  app.post('/register', users.create);
  app.post('/login', users.login);
  app.get('/logout', users.logout);
  //<!--Games Controller-->
  app.get('/getgames/:weeknumber', games.index);
}
