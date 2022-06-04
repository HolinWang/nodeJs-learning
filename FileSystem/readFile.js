const fs = require("fs");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log(`fail ${err}}`);
  } else {
    console.log(`success ${data}`);
  }
})