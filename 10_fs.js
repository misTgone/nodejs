const fs = require('fs');
/*
fs.mkdir('./mydir',(err)=>{
	if(err){
		throw err;
	}
	console.log('目录创建成功');
});
*/
/*
fs.rmdir('./mydir',(err)=>{
    if (err)
    {
		throw err;
    }
	console.log('删除成功');
});
*/
/*
fs.readdir('./03_2',(err,files)=>{
    if (err)
    {
		throw err;
    }    
	console.log(files);
});
*/
fs.writeFile('./fs.txt','hello',(err)=>{
    if (err)
    {
		throw err;
    }   
});