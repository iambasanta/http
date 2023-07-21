const http = require("http");

const PORT = 8000;
const httpServer = http.createServer();

httpServer.on("connection", (connection) => {
  console.log("CONNECTED");
});

httpServer.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(
    `<html><head><title>html</title></head><body><h1>HTML</h1></body></html>`
  );
});

function countConnections() {
  httpServer.getConnections((err, count) => {
    console.log(`NO. OF CONNECTIONS: ${count}`);
  });
  setTimeout(countConnections, 3000);
}

countConnections();

httpServer.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
