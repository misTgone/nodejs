const express = require('express');
var server = express();
server.listen(3000);
server.get('/home',(req,res)=>{
    res.redirect('http://www.codeboy.com');
});
server.get('/headpic',(req,res)=>{
	console.log(__dirname);
    res.sendFile(__dirname + '/1.jpg');
});