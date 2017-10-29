var http=require("http");
http.createServer( function(req,res){
	//发送HTTP头部
	//HTTP状态值：200 ok
	//内容类型
	res.writeHead(200,{'Content-Type':'text/plain'});
	//发送响应数据“Hello World”
	res.end('Hello World\n');

}).listen(8888)
console.log("node.js !!!");