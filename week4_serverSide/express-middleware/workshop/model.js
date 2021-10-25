const crypto = require("crypto");

let sessions = {};

function getSession(sid) {
  return sessions[sid];
}
function createUser(data) {
  const sid = crypto.randomBytes(18).toString("base64");
  sessions[sid] = data;
  return sid;
  // return (sessions[sid] = user);
  // console.log(sessions);
}

module.exports = { getSession, createUser };
