

const mysql = require('mysql');
let conn = mysql.createConnection({
	user:'root',
	password:'',
	database:'xz',
});
conn.query('select * from xz_user',(err,result)=>{
	if(err) throw err;
	console.log(result);
	conn.end();
});