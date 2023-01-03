const allowedOrigins = ['http://localhost:3500', 'http://127.0.0.1:5500'];

const corsOptions = {
  origin: (originWhichRequested, callback) => {
    if (
      allowedOrigins.includes(originWhichRequested) ||
      !originWhichRequested
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = {
  allowedOrigins,
  corsOptions,
};
