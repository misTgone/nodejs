const express = require('express');
var server = express();
server.listen(3000);
server.get('/shopping/:price/:title',(req,res)=>{
    console.log(req.params);
});