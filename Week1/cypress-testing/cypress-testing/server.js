let express = require("express");

let server = express();

server.get("/", (request, response) => {
  let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to my site</title>
</head>
<body>
    
</body>
</html>`;

  response.send(html);
});

////about section

server.get("/about", (request, response) => {
  let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About this site</title>
</head>
<body>
    
</body>
</html>`;
  response.send(html);
});

////sign-in section
let bodyParser = express.urlencoded({ extended: false });

// server.post("/add-dog", bodyParser, (request, response) => {
//   let newDog = request.body;
//   let name = newDog.name.toLowerCase();
//   dogs[name] = newDog;
//   response.redirect("/");
// });

server.get("/sign-up", (request, response) => {
  let html = `
    <!DOCTYPE html>
<html lang="en">
<head><link rel="stylesheet" type="text/css" href="./style.css" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <title>About this site</title>


</head>




<body >

<form method="POST">
  <label for="email">Email</label>
  <input id="email" type="email" name="email">
  <label for="password">Password</label>
  <input id="password" type="password" name="password">
  <button>click</button>
</form>
    
</body>
</html>`;

  response.send(html);
  //   response.send(html);
});

server.get("/welcome", (request, response) => {
  let html = `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>welcome</title>
  </head>
  <body>
  <h1>Welcome<h2>
  
  
      
  </body>
  </html>`;
  response.send(html);
});

server.post("/sign-up", bodyParser, (request, response) => {
  response.redirect("/welcome");
});
let PORT = 3332;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
