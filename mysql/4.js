const cp = require('child_process');
cp.exec('mysql -uroot <' +__dirname+'/xxx.sql',(err,stdout,stderr)=>{
	if(err) throw err;
	console.log(stdout);
});
