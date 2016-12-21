var express = require('express');
const path = require('path');

var app = express();

//Access to all Static files
app.use(express.static(path.join(__dirname, '/client')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})