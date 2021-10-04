const db = require("../database/connection.js");
const db = require("../database/connection.js");

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

function get(request, response) {
  const select_posts = /*sql*/ `
      SELECT blog_posts.text_content, users.username
      FROM blog_posts INNER JOIN users
      ON blog_posts.user_id = users.id
      ORDER BY blog_posts.id DESC
    `;

  //   const matching_posts = /*sql*/ `SELECT users.username, blog_posts.text_content FROM blog_posts INNER JOIN users ON users.id = blog_posts.user_id`;

  db.query(select_posts).then((result) => {
    const posts = result.rows;
    const postItems = posts.map((post) => {
      return /*html*/ `
        <li>
         <p>${post.text_content}</p>
         <p>${post.username}</p>
        </li>
      `;
    });
    response.send(`<ul>${postItems.join("")}</ul>`);
  });
}

module.exports = { get };

module.exports = { post, get };
