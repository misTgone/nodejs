const express = require('express');
var server = express();
server.listen(3000);
server.use('/login',(req,res,next)=>{
    console.log('登录验证');
	next();
});
server.get('/login',(req,res)=>{
    res.send('登录成功');
});
