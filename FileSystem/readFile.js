const fs = require("fs");

// __dirname表示当前文件所处目录
console.log(__dirname)
fs.readFile(`${__dirname}/file.txt`, "utf-8", (err, data) => {
  if (err) {
    return console.log(`fail ${err}}`);
  } else {
    console.log(`success ${data}`);
  }
})