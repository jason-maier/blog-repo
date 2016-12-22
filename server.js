var express = require('express');
const path = require('path');

var app = express();

//Access to all Static files
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', function(req,res){
    res.send(200).end();
})

app.listen(process.env.PORT || 3000)