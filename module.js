const fs = require('fs');
const path = require('path');

module.exports = function (filePath, ext, callback) {
  fs.readdir(filePath, (err, list) => {
    if (err) {
      return callback(err);
    } else {
      let filtered = [];

      list.forEach(file => {
        if (path.extname(file).slice(1) === ext) {
          filtered.push(file);
        }
      })

      return callback(null, filtered);
    }
  });
};
