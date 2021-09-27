// const numberArray = [1, 2, 3];
// console.log(numberArray);

const express = require("express");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

// server.get("/", (request, response, next) => {
//   console.log(request.method + " " + request.url);
//   console.log("hello");
//   next();
// });

// server.get("/", (request, response) => {
//   const time = new Date().toLocaleTimeString();

//   //   response.send("hello");
//   response
//     .set({
//       "x-fake-header": "my value",
//       "a-another-header": "another value",
//     })
//     .status(404)
//     .send(`<h1>Hello</h1>  ${time}`);

//   //   response.set("x-fake-header", "my-value");
// });

function logger(request, response, next) {
  console.log(request.method + " " + request.url);
  next();
}
server.use(logger);

server.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

// server.get("/", (request, response) => {
//   response.send("<h1>Hello</h1>");
// });
server.get("/json", (request, response) => {
  response.send({ message: "Hello" });
});

server.get("/redirects", (request, response) => {
  response.redirect("/");
});

server.get("/users/:name", (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});


////post request

const bodyParser = express.urlencoded();

server.post("/submit", bodyParser, (request, response) => {
  console.log(request.body);
  response.send("thanks for submitting");
});
// server.post("/submit", (request, response) => {
//     console.log("posted");
//     response.send("thanks for submitting");
//   });

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

/////We can tell our server to listen on a port like this:

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

//////////////////static
