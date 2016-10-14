var User = mongoose.model('User');

module.exports = (function(){
  return{

    index: function(req, res){

    },

    create: function(req, res){
      User.findOne({email: req.body.email}, function(err, user){
        if (user){
          res.json({status: false, errors: "Email is already in use"});
        }else{
          if(req.body.password == req.body.confirmpassword){
            var user = new User({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              username: req.body.username,
              password: req.body.password
            });
            user.save(function(err){
              if (err){
                var errorsArr = [];
                for (var idx in err.errors){
                  errorsArr.push(err.errors[idx].message);
                }
                res.json({status: false, errors: errorsArr});
              }else{
                sessionUser = {
                  loggedIn: true,
                  user_id: user._id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  username: user.username,
                  email: user.email
                }
                res.json({status: true, sessionUser: sessionUser});
              }
            })
          }else{
            res.json({status: false, errors: "Passwords must Match"});
          }
        }
      })//findOne
    },
    login: function(req, res){
      if(req.body.username && req.body.password){
        User.findOne({username: req.body.username}, function(err, user){
          if(user){
            if(user.validPassword(req.body.password)){
              sessionUser = {
                loggedIn: true,
                user_id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email
              }
              res.json({status: true, sessionUser: sessionUser});
            }else{
              res.json({status: false, errors: "Incorrect Username or Password"});
            }
           }else{
             res.json({status: false, errors: "Incorrect Username or Password"});
          }
        })
      }else{
        res.json({status: false, errors: "Must Provide Username and Password"});
      }
    },
    logout: function(req, res){
      sessionUser = {loggedIn: false};
      res.json({status: true, sessionUser: sessionUser});
    },
    finalfx: function(req, res){

    }

  }
})();
