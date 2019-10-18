const express = require('express');
const querystring = require('querystring');
var server = express();
server.listen(3000);
server.use(express.static('../public'));
//server.get('/input',(req,res)=>{
//    res.sendFile(__dirname + '/id.html');
//});
server.get('/send',(req,res)=>{
    var id = req.query;
	var di = querystring.stringify(id);
	console.log(di.substr(15,8));
	res.send('提交成功！');
});