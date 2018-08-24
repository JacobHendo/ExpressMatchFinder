var path = require("path");
var possibleMatches = require("../data/friends.js")

module.exports = (app)=> {
    app.get('/api/friends', (req, res)=> {
        res.json(possibleMatches);
    });

    app.post('/api/friends', (req, res)=> {
        
        var userScores = req.body.scores;
        var scoresArray = [];
        var newLove = 0;
        var theGap = 0;

        for (var i = 0; i < possibleMatches.length; i++) {
            for (var j = 0; j < userScores.length; j++) {
                theGap += (Math.abs(parseInt(possibleMatches[i].scores[j]) - parseInt(userScores[j])));
            }
            scoresArray.push(theGap);
        }
        
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[newLove]) {
                newLove = i;
            }
        }

       
        var newLove = possibleMatches[newLove];
        res.json(newLove);

        
        possibleMatches.push(req.body);
    });
};