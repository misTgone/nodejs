const express = require('express');
//引入用户路由器
const userRouter = require('./routes/user.js');
var server = express();
server.listen(3000);
server.use(express.static('./public'));
//使用路由器管理路由
//把用户路由器挂载到/user下，访问形式/user/detail
server.use('/user',userRouter);
