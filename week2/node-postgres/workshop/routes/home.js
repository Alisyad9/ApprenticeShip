const db = require("../database/connection.js");

function get(request, response) {
  ///quering for data

  db.query("SELECT username, age FROM users").then((result) => {
    // console.log(result);

    const users = result.rows; /// access the object name rows
    const userList = users
      .map((user) => /*html*/ ` <li> ${user.username}  ${user.age}</li> `)
      .join("");

    response.send(/*html*/ `<ul> ${userList}</ul>`);
  });

  // response.send(`<h1>Hello world</h1>`);
}

module.exports = { get };
