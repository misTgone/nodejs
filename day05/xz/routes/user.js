const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
//添加路由
//1.检索用户
router.get('/detail',(req,res)=>{
	//获得数据
	var obj = req.query;
	console.log(obj);
	var $uid = obj.uid;
	//验证是否为空
	if ($uid==''){
		res.send({code:401,msg:'uid required'});
		//如果验证失败，阻止继续往后执行
		return;
	}
	//不能两次res.send();
	//res.send('这是详情');
	//执行sql语句
	pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],
		(err,result)=>{
			if(err){
				throw err;
			}
			//发查询结果发送到浏览器
			res.send(result);
	});
});
//2.用户注册
router.post('/reg',(req,res)=>{
	var data = req.body;
	//console.log(data);
	var $uname = data.uname;
	var $upwd = data.upwd;
	var $email = data.email;
	var $phone = data.phone;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}else if(!$upwd){
		res.send({code:401,msg:'upwd required'});
		return;
	}else if(!$email){
		res.send({code:401,msg:'email required'});
		return;
	}else if(!$phone){
		res.send({code:401,msg:'phone required'});
		return;
	}
	data.uid = null;
	//执行sql语句，把数据（data）插入到数据库中
	pool.query('INSERT INTO xz_user SET ?',[data],
		(err,result)=>{
			if(err){
				throw err;
			}else if(result.affectedRows>0){
				res.send({code:200,msg:'reg suc'});
			}else{
				res.send({code:401,msg:'reg fail'});
			}
	});
	//res.send('注册成功');
});
//3.用户登录
router.post('/login',(req,res)=>{
	var login = req.body;
	var $uname = login.uname;
	var $upwd = login.upwd;
	//console.log(login);
	//验证数据是否为空
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}else if(!$upwd){
		res.send({code:401,msg:'upwd required'});
		return;
	}
	//执行SQL语句，以用户名为条件查询数据，查看结果
	//复习mysql查询条件，模糊查询，简单查询，复杂查询
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],
		(err,result)=>{
		if(err){
			throw err;
		}else if(result.length>0){
			console.log(result);
		}else{
			console.log('帐号或者密码错误');
		}
	});
});
//4.更改用户
router.post('/update',(req,res)=>{
	//获取数据
	var update = req.body;
	//验证是否为空
	var $uid = update.uid;
	var $phone = update.phone;
	var $gender = update.gender;
	var $user_name = update.user_name;
	var $email = update.email;
	if(!$uid){
		res.send({code:401,msg:'uid required'});
		return;
	}else if(!$phone){
		res.send({code:402,msg:'phone required'});
	    return;
	}else if(!$gender){
		res.send({code:403,msg:'gender required'});
		return;
	}else if(!$user_name){
		res.send({code:404,msg:'user_name required'});
		return;
	}else if(!$email){
		res.send({code:405,msg:'email required'});
		return;
	}
    //执行SQL语句
	pool.query(
		'UPDATE xz_user SET email=?,phone=?,user_name=?,gender=? WHERE uid=?',
		[$email,$phone,$user_name,$gender,$uid],
		(err,result)=>{
			if(err){
				throw err;
			}else if(result.affectedRows>0){
				res.send({node:200,msg:'update suc'});
			}else{
				res.send({node:406,msg:'update fail'});
			}
	});
});
//5.删除用户
router.get('/delete',(req,res)=>{
	//获取对象
	var de = req.query;
	//console.log(de);
	//验证数据
	if(!de.uid){
		res.send({code:401,msg:'uid required'});
		return;
	}
	//执行SQL语句
	pool.query('DELETE FROM xz_user WHERE ?',[de],
		(err,result)=>{
			if(err){
				throw err;
			}else if(result.affectedRows>0){
				res.send({code:200,msg:'delete suc'});
			}else{
				res.send({code:201,msg:'delete fail'});
			}
			//console.log(result);
	});
});
//6.用户列表
//路由
router.get('/list',(req,res)=>{
	//获取数据
	var data = req.query;
	var $page = data.page;
	var $count = data.count;
	//验证数据
	if(!$page){
		res.send({code:401,msg:'page required'});
		return;
	}else if(!$count){
		res.send({code:402,msg:'count required'});
	}
	//转整型
	var $page = Math.floor($page);
	var $count = Math.floor($count);
	//计算start
	var $start = ($page-1)*$count;
	//console.log($start);
	//执行SQL语句
	pool.query('SELECT * FROM xz_user LIMIT ?,?',[$start,$count],
		(err,result)=>{
			if(err){
				throw err;
			}
			res.send(result);
	});
});
//导出路由器
module.exports = router;