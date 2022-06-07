// 获取文件扩展名
const path = require('path');
const fpath = "a/b/c/index.html";
const str = path.basename(fpath);

console.log(str);  //index.html

const str_new = path.basename(fpath, ".html");
console.log(str_new); //index