const http = require("http");

const PORT = 8000;
const httpServer = http.createServer();

httpServer.on("connection", (connection) => {
  console.log("CONNECTED");
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
