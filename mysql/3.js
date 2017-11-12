const mysql = require('mysql');
let pool=mysql.createPool({
	connectionLimit:10,
	user:'root',
	password:'',
	database:'test'
});
pool.getConnection((err,connection)=>{
	if(err) throw err;
	connection.query('insert into scott.emp(empno) value(1111)',(err,result,fields)=>{
		if(err) throw err;
		console.log(result);
		console.log(result.affectedRows);//被影响的行数
		connection.release();//释放pool中被使用的程序
	})
});