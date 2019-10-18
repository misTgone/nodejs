const express = require('express');
//创建web服务器
var server = express();
//监听端口
server.listen(3000);
server.get('/index',(req,res)=>{
		res.send('这是首页');
});
server.get('/login',(req,res)=>{
    res.send('这是登录页面');
});