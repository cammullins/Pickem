// var Game = mongoose.model('Game');
var request = require('request');

var sundayweek = [20160911, 20160918, 20160925, 20161002, 20161009, 20161016, 20161023, 20161030, 20161106, 20161113, 20161120, 20161127, 20161204, 20161211, 20161218, 20161225],
    mondayweek = [20160912, 20160919, 20160926, 20161003, 20161010, 20161017, 20161024, 20161031, 20161107, 20161114, 20161121, 20161128, 20161205, 20161212, 20161219, 20161226]

module.exports = (function(){
  return{
    index: function(req, res){
      var username = "cmullins341",
          password = "password",
          wknum = req.params.weeknumber;
          console.log(sundayweek[wknum]);
          sunday = sundayweek[req.params.weeknumber - 1],
          monday = mondayweek[req.params.weeknumber - 1];
          url = 'https://' + username + ':' + password + '@www.mysportsfeeds.com/api/feed/pull/nfl/2016-2017-regular/daily_game_schedule.json?fordate='+sunday;
      request({url: url}, function(error, response, body){
        if (error){
          console.log(error);
        }else{
          res.json({games: response});
        }
      })
    },
    finalfx: function(req, res){

    }
  }
})();
