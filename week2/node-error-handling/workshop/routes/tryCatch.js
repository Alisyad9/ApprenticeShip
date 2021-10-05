const layout = require("../layout.js");

function get(request, response) {
  // try {
  const html = layot(`<h1>Gonna error</h1>`);
  response.send(html);
  // } catch (error) {
  //   console.error(error);
  //   response.status(500).send(/*html*/ ` <h1>Error</h1>`);
  // }
}

module.exports = { get };
