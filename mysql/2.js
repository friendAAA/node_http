const mysql = require('mysql');
let pool=mysql.createPool({
	connectionLimit:10,
	user:'root',
	password:'',
	database:'xz'
});
pool.getConnection((err,connection)=>{
	if(err) throw err;
	connection.query('select 1+2',(err,result)=>{
		if(err) throw err;
		console.log(result);
		connection.release();//释放pool中被使用的程序
	})
});