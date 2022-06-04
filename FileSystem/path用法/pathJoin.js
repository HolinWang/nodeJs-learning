const path = require('path');
const fs = require("fs");
// ../会抵消掉前面的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');

const url = path.join(__dirname, '../', '/file.txt');
// __dirname表示当前文件所处目录
fs.readFile(url, "utf-8", (err, data) => {
  if (err) {
    return console.log(`fail ${err}}`);
  } else {
    console.log(`success ${data}`);
  }
})