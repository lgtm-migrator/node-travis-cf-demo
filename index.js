const http = require('http');


http.createServer(function (req, res) {
  res.end(JSON.stringify({ server: 'hello world' }))
}).listen(parseInt(process.env.PORT || 8080))

