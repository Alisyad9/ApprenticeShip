const express = require("express");
const cookieParser = require("cookie-parser");
const server = express();
const crypto = require("crypto");
// server.use(cookieParser());

server.use(cookieParser("alongrandomstringnobodyelseknows"));

//////
server.get("/", (request, response) => {
  // const cookies = request.get("cookie");
  // console.log(cookies);

  // console.log(request.cookies);
  console.log("sessions :", sessions);

  const sid = request.signedCookies.sid;
  if (sid) {
    const userInfo = sessions[sid];
    console.log(userInfo);
  }

  console.log("this is the request. singedCookies", request.signedCookies);
  response.send("<h1>Hello</h1>");
});

///////setting cookie

// server.get("/example", (request, response) => {
// response.set(
//   "set-cookie",
//   "hello=this is my cookie; HttpOnly; Max-Age=60; SameSite=Lax"
// );

//// using object express for server

// response.cookie("hello", "it is me", {
//   httpOnly: true,
//   maxAge: 1000 * 60,
//   sameSite: "lax",
// });

//   const userInfo = {
//     id: 1,
//     username: "oliverjam",
//     admin: true,
//   };
//   response.cookie("user1", userInfo, {
//     httpOnly: true,
//     maxAge: 1000 * 60,
//     sameSite: "lax",
//   });
//   response.redirect("/");
// });

server.get("/example", (request, response) => {
  // response.cookie("hello", "this is my cookie", { signed: true });
  response.redirect("/");
});

/////login route

let sessions = {};

// later
// sessions["abcd"] = { id: 1, username: "oliverjam", admin: true };

server.get("/login", (request, response) => {
  // response.cookie("name", "what i am saying", { signed: true });
  // response.cookie("email", "alisiyad", { signed: true });
  const sid = crypto.randomBytes(18).toString("base64");

  const userInfo = {
    id: 1,
    username: "oliverjam",
    admin: true,
  };
  sessions[sid] = userInfo;
  response.cookie("user1", sid, {
    httpOnly: true,
    maxAge: 1000 * 60,
    sameSite: "lax",

    signed: true,
  });

  response.redirect("/");
});

////logout route

server.get("/logout", (request, response) => {
  console.log("singed cookies", request.signedCookies);

  const sid = request.signedCookies.sid;
  delete sessions[sid];
  response.clearCookie("user1");

  response.redirect("/");
});

server.get("/remove", (request, response) => {
  response.clearCookie("user");
  response.redirect("/");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
