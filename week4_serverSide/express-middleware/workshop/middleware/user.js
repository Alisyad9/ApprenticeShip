const model = require("../model.js");

function getUser(req, res, next) {
  const sid = req.signedCookies.sid;
  const user = model.getSession[sid]; ///

  ///does not create the object if it does not exist.
  if (user) {
    req.session = user;
  }

  next();
}

module.exports = getUser;
