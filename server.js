// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require("multer");
var upload = multer();




app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});




app.post("/upload",upload.single("file"), function (req, res) {
      res.status(200).end(JSON.stringify({filesize: req.file.size}))}
);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
