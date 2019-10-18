const express = require('express');
const querystring = require('querystring');
var server = express();
server.listen(3000);
server.get('/home',(req,res)=>{
    //res.sendFile(__dirname + '/reg.html');
	res.sendFile(__dirname + '/reg.html');
	//console.log(req.query);
});
server.post('/reg',(req,res)=>{
    res.send('登录成功！');
    //console.log(req.query);
	req.on('data',(buf)=>{
	    var obj = buf.toString();
		var qs = querystring.parse(obj);
		console.log(qs);
	});
});
