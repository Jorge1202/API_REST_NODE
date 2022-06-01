function logErrors(err, req, res, next) {
  console.error(err);
  next(err); // on next nos indica que ejecute el siguiente middleware
}

function errorHangle(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  logErrors,
  errorHangle,
};
