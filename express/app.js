const express=require('express');


let app = express();

app.get('/add',(req,res)=>{//get post put delete app.Method(Path,handler)
	console.log(req.query);
	res.send('hello, node.js,express')
});


app.listen(80);
