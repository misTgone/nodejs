//引入mysql模块
const mysql = require('mysql');
//1.普通连接
//1.1创建连接
var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
    password:'',
	database:'tedu' //使用的数据库

});
//1.2执行连接
connection.connect();
//执行sql语句，得到的结果是一个数组
connection.query('SELECT * FROM emp',(err,result)=>{
	if (err){
		throw err;
	}
    console.log(result);
});
//关闭连接
connection.end();