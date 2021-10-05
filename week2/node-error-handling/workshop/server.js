const express = require("express");

const home = require("./routes/home.js");
const tryCatch = require("./routes/tryCatch.js");
const rejection = require("./routes/rejection.js");

const server = express();

process.on("unhandledRejection", (error) => {
  //   process.exitCode = 2;
  console.error(error);
  process.exit(1);
});

server.get("/", home.get);
server.get("/try-catch", tryCatch.get);
server.get("/rejection", rejection.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
