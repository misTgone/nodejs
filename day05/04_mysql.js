const mysql = require('mysql');
//2.使用连接池
//创建连接池对象
var pool = mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20 //设置连接池的数量，使用非常高效，用完即返回，0.2s左右
});
//连接池已经执行连接不需要pool.connection();
//执行sql语句
/*
pool.query('UPDATE emp SET birthday="2000-1-1", salary=7500 WHERE eid=7',(err,result)=>{
	if (err){
		throw err;
	}
	console.log(result);
});
*/
/*
pool.query('DELETE FROM emp WHERE eid=10',(err,result)=>{
	if (err){
		throw err;
	}
});
//pool.end();
*/
/*
//模板字符串形式
pool.query(`INSERT INTO emp VALUES(?,?,?,?,?,?)`,[null,'java',0,
'1998-3-2',5400,10],(err,result)=>{
	if (err){
		throw err;
	}
	console.log(result);
});
*/
/*
var emp={
	eid:null,
	ename:'html',
	sex:1,
	birthday:'1995-12-25',
	salary:6100,
	deptId:30
};
pool.query('INSERT INTO emp SET ?',[emp],(err,result)=>{
	if (err){
		throw err;
	}
	console.log(result);
});
*/
/*
pool.query('UPDATE emp SET birthday=?,salary=? WHERE eid=?',
['2001-1-1','7500',19],(err,result)=>{
	if(err){
		throw err;
	}
	//console.log(result);
	//判断是否更改成功
	if(result.affectedRows>0){
		console.log('修改成功');
	}else{
		console.log('修改失败');
	}
});
*/
//删除编号为11的数据，成功打印“删除成功”，否则打印“删除失败”
pool.query('DELETE FROM emp WHERE eid=?',[9],(err,result)=>{
	if(err){
		throw err;
	}else if(result.affectedRows>0){
		console.log('删除成功');
	}else{
		console.log('删除失败');
	}
});