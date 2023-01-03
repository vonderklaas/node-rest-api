const { logEvents } = require('./logEvents');

const errorHandler = (error, req, res, next) => {
  logEvents(`${error.name}: ${error.message}`, 'error-logs.txt');
  console.error(error.stack);
  res.status(500);
  res.send(error.message);
  next();
};

module.exports = {
  errorHandler,
};
