const fs = require("fs");

fs.writeFile(`${__dirname}/whitefly.txt`, "hello,write file", (err) => {
  if (err) {
    return console.log(`write fail ${err}}`);
  } else {
    return console.log(`write success`);
  }
})