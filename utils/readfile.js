const fs = require("fs");

const readFile = async (file) => {
  return new Promise((resolve, reject) => {
    console.log("just a test");
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = readFile;
