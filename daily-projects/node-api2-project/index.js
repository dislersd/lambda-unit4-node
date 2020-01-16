const server = require("./server");

const port = 8000;

server.listen(port, () => {
  console.log(`\n ** server running on port ${port} ** \n`);
});
