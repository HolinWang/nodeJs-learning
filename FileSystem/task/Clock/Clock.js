//1. 导入fs模块
const fs = require("fs");
// 导入path模块
const path = require("path");

// 定义正则表达式 匹配<style>和<script>标签
const regStyle = /<style>[\s\S]*<\/style>/;

const regScript = /<script>[\s\S]*<\/script>/;


// 2. 读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, data) => {
  if (err) {
    return console.log(`读取文件失败! ${err.message}`);
  }
  // 拆解css js html 文件
  resolveCSS(data);
  resolveJS(data);
})

function resolveCSS(htmlStr) {
  // 提取内容
  let cssStr = regStyle.exec(htmlStr);


  let cssStr_new = cssStr[0].replace('<style>', "").replace('</style>', "");
  console.log(cssStr_new);


  // 将提取的css写入index.css文件中

  fs.writeFile(path.join(__dirname, './index.css'), cssStr_new, (err) => {
    if (err) {
      return console.log(`写入样式文件失败! ${err.message}`);
    } else {
      return console.log(`写入样式文件成功!`);
    }
  })
}

function resolveJS(htmlStr) {
  // 提取内容
  let jsStr = regScript.exec(htmlStr);


  let jsStr_new = jsStr[0].replace('<script>', "").replace('</script>', "");
  console.log(jsStr);


  // 将提取的css写入index.css文件中

  fs.writeFile(path.join(__dirname, './index.js'), jsStr_new, (err) => {
    if (err) {
      return console.log(`写入js文件失败! ${err.message}`);
    } else {
      return console.log(`写入js文件成功!`);
    }
  })
}