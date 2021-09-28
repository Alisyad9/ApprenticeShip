const express = require("express");
const dogs = require("./dogs.js");

const server = express();

// const staticHandler = express.static("public");

// server.use(staticHandler);
const dogValue = Object.values(dogs);

// console.log( dogValue );

server.get("/", (request, response) => {
  //   const myObj = {
  //     first: { test: "hi" },
  //     second: { test: "bye" },
  //   };

  const search = request.query.search || "";

  let items = "";
  for (const dogNm of dogValue) {
    const match = dogNm.name.toLowerCase().includes(search.toLowerCase());

    if (match || !search) {
      items += `<li>${dogNm.name}</li>`;
    }
  }

  const list = `<ul>${items}</ul>`;
  response.end(
    `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
${list}
    <form>
    <input name="myMessage" type="search" name="search" placeholder="E.g. rover"/>
    <button>Submit</button>
  </form>
    </body>
  </html>
  `
  );
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
