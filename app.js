const http = require('http');
const hostname = 'localhost';
const port = 9000;
const getUser = require('./controller');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const user = getUser(req, res);
  console.log(user.operatingSystem);
  console.log(typeof user.operatingSystem);
  console.log(user);
  res.end(JSON.stringify(user));
});

server.listen(port, hostname => {
  console.log('Server started at port ' + port + '...');
});
