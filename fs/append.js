const fs=require('fs');
fs.appendFile(__dirname+'/some_file',"appendSomething",(err)=>{
	if(err) throw err;
});