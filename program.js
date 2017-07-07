const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
  let reqUrl = url.parse(req.url, true);
  let time = new Date(reqUrl.query.iso);
  let result;

  if (reqUrl.pathname === '/api/parsetime') {
    result = parseTime(time);
  } else if (reqUrl.pathname === '/api/unixtime') {
    result = parseUnixTime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);

function parseTime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

function parseUnixTime(time) {
  return { "unixtime": time.getTime() }
}
// const http = require('http');
// const fs = require('fs');
// const portNumber = process.argv[2];
// const path = process.argv[3];
//
// const server = http.createServer((req, res) => {
//   fs.createReadStream(path).pipe(res);
// });
// server.listen(portNumber);

// const net = require('net');
// const server = net.createServer(socket => {
//   let date = makeDate();
//   socket.end(date + "\n");
// });
//
// const portNumber = process.argv[2];
// server.listen(portNumber);
//
// function makeDate() {
//   let date = new Date;
//   let dateString = "";
//
//   dateString = dateString + date.getFullYear() + "-";
//   dateString = dateString + parseMonth(date) + "-";
//   dateString = dateString + parseDay(date) + " ";
//   dateString = dateString + parseHours(date) + ":";
//   dateString = dateString + parseMinutes(date);
//
//   return dateString;
// }
//
// function parseMonth(date) {
//   let month = date.getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// }
//
// function parseDay(date) {
//   let day = date.getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// }
//
// function parseHours(date) {
//   let hours = date.getHours();
//   if (hours < 10) {
//     return `0${hours}`;
//   } else {
//     return hours;
//   }
// }
//
// function parseMinutes(date) {
//   let minutes = date.getMinutes();
//   if (minutes < 10) {
//     return `0${minutes}`;
//   } else {
//     return minutes;
//   }
// }

// const http = require('http');
//
// const url1 = process.argv[2];
// const url2 = process.argv[3];
// const url3 = process.argv[4];
// let result = "";
//
// http.get(url1, res1 => {
//   res1.setEncoding('utf8');
//   res1.on('data', data => result += data);
//   res1.on('end', () => {
//     console.log(result);
//     http.get(url2, res2 => {
//       res2.setEncoding('utf8');
//       result = "";
//       res2.on('data', data => result += data);
//       res2.on('end', () => {
//         console.log(result);
//         http.get(url3, res3 => {
//           res3.setEncoding('utf8');
//           result = "";
//           res3.on('data', data => result += data);
//           res3.on('end', () => {
//             console.log(result);
//           });
//         });
//       });
//     });
//   });
// }).on('error', err => console.error(err));

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
