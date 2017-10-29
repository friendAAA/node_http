const fs=require("fs");
const readline=require("readline");
// let file=process.argv[1];
readline.createInterface({
	input:fs.createReadStream("./question.js"),
	output:process.stdout,
	terminal:false
}).on("line",(line)=>{//line 读行的时
	console.log(line);
});