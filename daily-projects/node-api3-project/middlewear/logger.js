const logger = (req, res, next) => {
  const { method, originalUrl } = req;
  const timestamp = new Date().toDateString();

  console.log(`${method} on ${originalUrl} at ${timestamp}`);

  next();
};

module.exports = logger;
