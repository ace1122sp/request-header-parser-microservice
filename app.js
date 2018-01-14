const http = require('http');
const hostname = 'localhost';
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const obj = {
    lang: req.headers['accept-language'],
    user: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for']
  }
  res.end(JSON.stringify(obj));
});

server.listen(port, hostname => {
  console.log('Server started at port ' + port + '...');
});
