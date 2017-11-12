const fs=require('fs');
fs.writeFile(__dirname+'/some_file','data...',(err)=>{
	if(err) throw err;
});
