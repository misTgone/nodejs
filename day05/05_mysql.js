const mysql = require('mysql');
const express = require('express');
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	port:'3306',
	database:'tedu',
	connectionLimit:20
});
var server = express();
server.listen(3000);
server.use(express.static('./public'));
var qy;
server.get('/add',(req,res)=>{
    qy = req.query;
	//console.log(qy);
	//注意不是INSERT INTO VALUES而是INSERT INTO SET
	pool.query('INSERT INTO dept SET ?',[qy],
	(err,result)=>{
		if(err){
			throw err;
		}else if(result.affectedRows>0){
			console.log('添加成功');
		}else{
			console.log('添加失败');
		}

});
	res.send('提交成功！');
});

