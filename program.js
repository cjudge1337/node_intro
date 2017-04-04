const fs = require('fs');
const path = require('path');
const mod = require('./module');

const filePath = process.argv[2];
const ext = process.argv[3];

mod(filePath, ext, (err, list) => {
  if (err) return console.error(err);

  list.forEach(file => {
    console.log(file);
  });
});

// fs.readdir(filePath, (err, list) => {
//   if (err) return console.error(err);
//
//   let newList = [];
//   for (let i = 0; i < list.length; i++) {
//     let fileName = list[i];
//     if (path.extname(fileName).slice(1) === ext) {
//       newList.push(fileName);
//     }
//   }
//
//   console.log(newList.join('\n'));
// });
