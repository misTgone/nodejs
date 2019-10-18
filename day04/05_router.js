const express = require('express');
//引入商品路由器
const productRouter = require('./product.js');
var server = express();
server.listen(3000);
//把路由器挂载到/product
//第一个参数：挂载的位置
//第二个参数：要挂载的路由器
server.use('/product',productRouter);