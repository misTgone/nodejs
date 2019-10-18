const http = require('http');
var url = 'http://www.weather.com.cn/weather1d/101010100.shtml';
//第二个参数通过回调函数获得响应的内容
http.get(url,(res)=>{
	//获取服务响应的状态码
    console.log(res.statusCode);
	res.on('data',(buf)=>{
		console.log(buf.toString())
	})
});
