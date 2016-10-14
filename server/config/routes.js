var users = require('./../controllers/users.js')

module.exports = function(app){
  // <!--Users Controller-->
  app.post('/register', users.create);
  app.post('/login', users.login);
  //<!--Dashboard Controller-->
  app.get('/logout', users.logout);
}
