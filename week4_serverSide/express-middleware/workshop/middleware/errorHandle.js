function handleError(error, req, res, next) {
  console.log(error);

  res.status(error.status || 500).send(`${error}`);
}

module.exports = handleError;
