const express = require('express');
const bodyParser = require('body-parser');
var server = express();
server.listen(3000);
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
    entended:false    
}));
server.post('/mylogin',(req,res)=>{
    console.log(req.body);
	res.send('登录成功');
});