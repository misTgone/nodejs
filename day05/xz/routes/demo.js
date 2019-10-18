const express=require('express');
//引入连接池模块
const pool=require('C:/xampp/htdocs/codes/AJAX/day06/pool.js');
//创建空的路由器对象
var router=express.Router();
//添加接口
/*
//1-ajaxDemo /demo/ajaxDemo
router.get('/ajaxDemo',(req,res)=>{
	res.send("这是我的第一个ajax程序");
});
//2.-ajaxhappy /demo/ajaxhappy
router.get('/ajaxhappy',(req,res)=>{
	res.send("我终于不报错啦！开森开森开森");
});
//3.-login  /demo/login?uname=**&upwd=**
router.get('/login',(req,res)=>{
	//获取用户名和密码
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库的操作
	var sql="select * from xz_user "
		+" where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});
//4,postlogin带参数  /demo/postlogin
router.post('/postlogin',(req,res)=>{
	//获取参数
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库
	var sql="select * from xz_user " 
		+"where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});
*/
//5.userlist
router.get('/userlist',(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器
module.exports=router;