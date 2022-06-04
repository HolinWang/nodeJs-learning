const fs = require("fs");
fs.readFile("./score.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log(`read file fail ${err}`);
  } else {
    const arrOld = data.split(" ");
    const arrNew = [];
    arrOld.forEach(item => {
      arrNew.push(item.replace("=", ": "));
    });
    const newData = arrNew.join("\r\n")
    console.log(newData);

    fs.writeFile("./scoreFormatted.txt", newData, (err) => {
      if (err) {
        return console.log(`write file fail ${err}`);
      } else {
        return console.log(`write file success !`);
      }
    })
  }
})