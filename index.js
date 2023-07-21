const http = require("http");

const httpServer = http.createServer();

const PORT = 8000;

httpServer.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
