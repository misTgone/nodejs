const fs = require('fs');
//fs.mkdirSync('./mydir');
//fs.writeFileSync('./mydir/1.txt','abc');
//fs.writeFileSync('./mydir/2.txt','hello');
//console.log(fs.readdirSync('./mydir'));
//删除之前需要先删除里面的文件，不然会报错
fs.unlinkSync('./mydir/1.txt');
fs.unlinkSync('./mydir/2.txt');
fs.rmdirSync('./mydir');