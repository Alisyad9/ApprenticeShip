//// check authorization function
function checkAuth(req, res, next) {
  const user = req.session;

  if (!user) {
    res
      .status(401)
      .send(`you are not logged in: <a href="/log-in"><h1>Log-in </h1>  </a> `);
  } else {
    next();
  }
}

module.exports = checkAuth;
