const db = require("../database/connection.js");

function get(request, response) {
  response.send(
    /*html*/

    `
    <form action="create-user" method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="age">Age</label>
        <input id="age" name="age" type="number">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `
  );
}

function post(request, response) {
  // db.query("INSERT INTO users").then((result) => {
  //   console.log(result);

  //   const newUserName = request.body;

  //   console.log(request.body);
  //   response.redirect("/");
  //   // const users = result.rows; /// access the object name rows
  //   // const userList = users
  //   //   .map((user) => /*html*/ ` <li> ${user.username} </li> `)
  //   //   .join("");

  //   // response.send(/*html*/ `<ul> ${userList}</ul>`);
  // });

  // const newUserName = request.body.username;
  // console.log(newUserName);

  // db.query(`INSERT INTO users(username, age) VALUES($1)`, [newUserName]);

  // console.log(newUserName.age + " " + newUserName.username); // e.g. { username: "oli", ... }
  // response.redirect("/");
  //   const insert_user = /*sql*/ `
  //   INSERT INTO users(username, age) VALUES($1, $2)
  // `;
  const values = [request.body.username, request.body.age];

  db.query(` INSERT INTO users(username, age) VALUES($1, $2)`, values).then(
    () => {
      response.redirect("/");
    }
  );
}

module.exports = { get, post };
