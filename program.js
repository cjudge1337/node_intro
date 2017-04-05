const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let result = "";

http.get(url1, res1 => {
  res1.setEncoding('utf8');
  res1.on('data', data => result += data);
  res1.on('end', () => {
    console.log(result);
    http.get(url2, res2 => {
      res2.setEncoding('utf8');
      result = "";
      res2.on('data', data => result += data);
      res2.on('end', () => {
        console.log(result);
        http.get(url3, res3 => {
          res3.setEncoding('utf8');
          result = "";
          res3.on('data', data => result += data);
          res3.on('end', () => {
            console.log(result);
          });
        });
      });
    });
  });
}).on('error', err => console.error(err));

// const http = require('http');
// http.get(process.argv[2], res => {
//   res.setEncoding('utf8');
//
//   let rawData = "";
//   res.on('data', chunk => rawData += chunk)
//   res.on('end', () => {
//     console.log(rawData.length);
//     console.log(rawData);
//   })
// }).on('error', err => {
//   console.error(error);
// });

// const http = require('http');
//
// const url = process.argv[2];
//
// http.get(url, res => {
//
//   res.setEncoding('utf8');
//
//   res.on('data', data => {
//     console.log(data);
//   })
// });

// const fs = require('fs');
// const path = require('path');
// const mod = require('./module');
//
// const filePath = process.argv[2];
// const ext = process.argv[3];
//
// mod(filePath, ext, (err, list) => {
//   if (err) return console.error(err);
//
//   list.forEach(file => {
//     console.log(file);
//   });
// });

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
