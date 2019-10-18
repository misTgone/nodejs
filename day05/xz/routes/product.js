const express = require('express');
var pool = require('../pool.js');
var router = express.Router();
//添加路由
//1.商品列表
router.get('/list',(req,res)=>{
	//获取数据
	var data = req.query;
	var $page = data.page;
	var $count = data.count;
	//转为整型
    var $page = parseInt($page);
	var $count = parseInt($count);
	//验证数据，空值设置默认值
	if($page == 0){
		var $page = 1;
	}else if($count == 0){
		var $count = 10;
	}
	//计算start
	var $start = ($page-1)*$count;
	//执行SQL语句
	pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[$start,$count],
		(err,result)=>{
			if(err){
				throw err;
			}
			res.send(result);
	});
});
//2.商品添加
router.get('/add',(req,res)=>{
	//获取数据
	var data = req.query;
	var $title = data.title;
	var $subtitle = data.subtitle;
	var $price = data.price;
	var $promise = data.promise;
	//验证是否为空
	//遍历对象
	var i = 400;
	for(var key in data){
		i++;
		//key属性
		//如果属性值data[key]为空
		if(!data[key]){
			res.send({code:i,msg:key+' required'});
			return;
		}
	}
	//执行SQL语句
	pool.query('INSERT INTO xz_laptop SET ?',[data],
		(err,result)=>{
			if(err){
				throw err;
			}
			res.send(result);
	});
});
//导出路由器对象
module.exports = router;