exports.saveErrorToLogFile = function saveErrorToLogFile(err, req, res, next) {
  console.error(err);

  fs.appendFile(
    'error.log',
    `[${new Date().toLocaleString()}] ${err}${
      err.stack ? `|${err.stack}` : ''
    }\n`,
    'utf-8'
  ).then(() => {
    next(err);
  });
};
