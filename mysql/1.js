const mysql = require('mysql');
let conn = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'xz'
});
conn.query('select * from xz_user', (err,res)=>{
	if(err) throw err;
	console.log(res);

});
conn.end();