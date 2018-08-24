var path = require("path");

module.exports =  (app)=>{
    console.log("routes hookup");
    app.get("/survey", (req, res)=>{
        console.log("route hit");
        
        res.sendFile(path.join(__dirname,  '../public/survey.html'));
    });
    
    app.get("*", (req, res)=>{        
        res.sendFile(path.join(__dirname,  '../public/home.html'));
        console.log("home route hit");
    });
}