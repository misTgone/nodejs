const http = require('http');
var server = http.createServer();
server.listen(3000,()=>{
    console.log('创建服务器成功！');
});
server.on('request',(req,res)=>{
    if(req.url=='/login'){
		res.write('This is login page');
	}else if (req.url=='/member'){
		console.log('This is member page');
	}else if (req.url=='/'){
		res.writeHead(302,{Location:'http://www.baidu.com'});
	}else{
		console.log('404 not found');
	}
	res.end();
});