//管理所有商品模块下的路由
//使用express下的路由器功能
const express = require('express');
//创建一个空的路由器（对象）
var router = express.Router();
//添加商品模块下的路由到路由器中
//请求方法：  请求方法:
router.get('/list',(req,res)=>{
    res.send('这是商品列表');
});
router.get('/name',(req,res)=>{
    res.send('这是用户列表');
});
//导出路由器
module.exports = router;