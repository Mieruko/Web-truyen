const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const sever = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

sever.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}/`);
});
