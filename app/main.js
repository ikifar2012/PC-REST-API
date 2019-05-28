var express = require("express");
var app = express();
var ks = require('node-key-sender');
var cp = require("child_process");

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/lock", (req, res, next) => {

    console.log("Locking Windows...");
    cp.exec("rundll32.exe user32.dll,LockWorkStation")
    res.send('Locked');
});
app.get("/desktop", (req, res, next) => {

    console.log("Show Desktop");
    ks.sendCombination(['windows', 'd']);
    res.send('Done');
});