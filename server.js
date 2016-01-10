var express = require('express');
var app = express();
app.use(express.static(__dirname+"/build/public"));



app.get('/',function(req,res) {
    res.sendFile(__dirname + '/build/public/index.html');
})

app.listen(process.env.PORT || 9000);