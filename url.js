const url=require("url");
let urlString='http://tester:test@github.com:81/a/b/c/index.html?name=tom&gender=m#10';
console.log(url.parse(urlString));
console.log(url.parse(urlString,true));
console.log(url.resolve("http://tester:test@github.com:81/a/b/c/index.html",'/css/style.css'));
// /css/style.css 表示根目录下的css文件