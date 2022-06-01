//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://http.cat

function logErrors(err, req, res, next) {
  console.error(err);
  next(err); // on next nos indica que ejecute el siguiente middleware
}

function boomErrorHangle(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
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
  boomErrorHangle,
};
