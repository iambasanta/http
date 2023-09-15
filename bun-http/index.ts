const server = Bun.serve({
  port: Bun.env.PORT,
  fetch(request) {
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/":
        return new Response("Home page!");
      case "/foo":
        return new Response("bar");
    }
    return new Response("404!");
  },
});

console.log(`Listening on port: ${server.port}`);
console.log(`http://localhost:${server.port}`);
