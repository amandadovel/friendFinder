var friendsList = require("../data/friends");

module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        // take new friend's scores and compare scores against each of the friends in the friends list
        // create variable that holds the array of new friends scores
        // create a variable that holds arbitrary large number to compare against
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;
        var lowestDiff = 1000;
        var match;

        if(friendsList.length > 0) {
            for (var i = 0; i < friendsList.length; i++) {
                // create variable that holds the score array of the current friend loops 
                // create nested loop that then loops through score array and compares each index of the score to new friends score 
                // subract each value from each other and save the total to a variable and compare that variable to the arbitrary large number already created
                // if lower than that number than they are friend match 
                var currentFriend = friendsList[i];
                var currentFriendScores = friendsList[i].scores;
                var currentDiff = 0;
    
                for (var j = 0; j < currentFriendScores.length; j++) {
                    currentDiff = parseInt(currentDiff) + Math.abs(currentFriendScores[j] - newFriendScores[j]);
                }
    
                if(currentDiff < lowestDiff) {
                    lowestDiff = currentDiff
                    match = currentFriend
                }
            }
            friendsList.push(newFriend);
            res.json(match);
            
        } else {
            friendsList.push(newFriend);
            res.json({
                message: "Sorry no friend match was found."
            });
        }
        
    });
}