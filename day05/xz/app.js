const express = require('express');
const bodyParser = require('body-parser');
//引入用户路由器
const userRouter = require('C:/xampp/htdocs/codes/AJAX/day06/xz/routes/user.js');
const productRouter = require('C:/xampp/htdocs/codes/AJAX/day06/xz/routes/product.js');
const demoRouter = require('C:/xampp/htdocs/codes/AJAX/day06/xz/routes/demo.js');
var server = express();
server.listen(3000);
server.use(express.static('C:/xampp/htdocs/codes/AJAX/day06/xz/public'));
server.use(express.static('C:/xampp/htdocs/codes/AJAX/day06/xz/ajax'));
//配置中间件
//server.use(express.bodyParser());
server.use(bodyParser.urlencoded({extended:false}));
//使用路由器管理路由
//把用户路由器挂载到/user下，访问形式/user/detail
server.use('/user',userRouter);
//把商品路由器挂载到/product下
//  /product/list
server.use('/product',productRouter);
//ajax
server.use('/demo',demoRouter);
