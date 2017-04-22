const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const MIME_TYPE = {
  css: 'text/css',
  gif: 'image/gif',
  html: 'text/html',
  ico: 'image/x-icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  js: 'text/javascript',
  json: 'application/json',
  pdf: 'application/pdf',
  png: 'image/png',
  svg: 'image/svg+xml',
  swf: 'application/x-shockwave-flash',
  tiff: 'image/tiff',
  txt: 'text/plain',
  wav: 'audio/x-wav',
  wma: 'audio/x-ms-wma',
  wmv: 'video/x-ms-wmv',
  xml: 'text/xml',
};

function mime(req) {
  let exname = path.extname(url.parse(req.url).pathname);
  exname = exname.slice(1) || '';
  return exname;
}

function staticHandler(req, res, fileType) {
  let filePath = req.url;
  if (req.url.slice(-1) === '/') filePath = `${req.url}index.html`;
  filePath = path.join(process.cwd(), 'test', url.parse(filePath).pathname);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('not found');
    } else {
      res.writeHead(200, { 'Content-Type': MIME_TYPE[fileType] });
      res.end(data.toString());
    }
  });
}

function get(req, res) {
  const params = url.parse(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`{"name": "jeff"}`);
}

function post(req, res) {
  if (req.url === '/postData') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', (buffer) => {
      const body = buffer.toString('utf8');
      res.end(body);
    });
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('not find');
}


function jsonp(req, res, callback) {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  res.end(`${callback}({"hello": "world"})`);
}

function app(req, res) {
  const fileType = mime(req);
  const query = url.parse(req.url, true).query;
  const callback = query.callback;
  switch (req.method) {
    case 'GET':
      // 请求的是静态文件
      if (MIME_TYPE[fileType] || req.url.slice(-1) === '/') {
        staticHandler(req, res, fileType);
      } else if (callback) {
        jsonp(req, res, callback);
      } else {
        get(req, res);
      }
      break;
    case 'POST':
      post(req, res);
      break;
    default:
      break;
  }
}


http.createServer(app).listen(8080, 'localhost');



