const readline=require("readline");
const reader=new readline.Interface({
	input:process.stdin,
	output:process.stdout
});
reader.question("input ur name:",(name)=>{
	console.log(name);
	// reader.close();
	process.exit(0);
});
const a=require("http");




