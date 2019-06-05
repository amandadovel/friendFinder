// Basic route that sends user to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Get route that sends to survey page 
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

