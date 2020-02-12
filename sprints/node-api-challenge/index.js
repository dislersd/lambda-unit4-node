const  server = require('./server.js');

const port = 7000;

server.listen(port, () => {
  console.log('server running')
})