var express = require("express");
var router = express.Router();
var friends = require("../app/data/friend")


router.get("/apifriends", function(req, res){
    res.send(friends);
});

router.post("/apifriends", function(req, res) {
 
  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };

    
    var userData = req.body;
    console.log(userData);
    var userScores = userData.scores;

    
    
    var totalDifference;

    
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

    
      if (totalDifference <= bestMatch.friendDifference) {
     
        bestMatch.name = currentFriend.name;
        bestMatch.from = currentFriend.from;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }


    res.json(bestMatch);
  });



    module.exports = router;