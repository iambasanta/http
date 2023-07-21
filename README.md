# `node-http` is a simple **Node.js** HTTP server

This is a basic guide to creating a simple HTTP server using Node.js and the built-in http module.

### Running the server

To run the server, open your terminal or command prompt, navigate to the project folder, and execute the following command:

```bash
npm start
```

Once the server is running, you should see the message `Listening to port 8000` and `http://localhost:8000` printed in the console.

### Accessing the server

##### Via `curl`

```bash
curl http://localhost:8000 -v
```

Press enter to execute the `curl` command. You should see the message `CONNECTED` printed in the console where your server is running. This indicates that a connection has been established with the server.

##### Via `web browser`

To test your HTTP server, open your web browser and enter `http://localhost:8000` in the address bar. You should see the message `CONNECTED` printed in the console where your server is running. This indicates that a connection has been established with the server.

#### **NOTE**

> When you make a request from the web browser, server logs additional request (in our example we see `CONNECTED` twice in our console); this is because browser makes a separate request to the server to fetch the website's favicon
