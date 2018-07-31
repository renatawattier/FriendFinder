var express = require("express");
var router = express.Router();
var friends = require("../app/data/friend")


router.get("/apifriends", function(req, res){
    res.send(friends);
});

router.post("/apifriends", function(req, res){
 var newFriend = req.body   
res.send(newFriend);
})



    module.exports = router;