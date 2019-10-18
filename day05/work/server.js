const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var pool = mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	password:'',
	user:'root',
	database:'tedu',
	connectionLimit:20
});
var server = express();
server.listen(3000);
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({extended:false}));
server.post('/sr',(req,res)=>{
	var qr = req.body;
	qr.eid = null;
	console.log(qr);
	pool.query('INSERT INTO emp SET ?',[qr],
		(err,result)=>{
			if(err){
				throw err;
			}else if(result.affectedRows>0){
				console.log('数据导入成功！');
			}else{
				console.log('数据导入失败！');
			}
	});
	res.send('提交成功！');
});
