const http = require("http");

const PORT = 8000;
const httpServer = http.createServer();

httpServer.on("connection", (connection) => {
  console.log("CONNECTED");
});

httpServer.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
