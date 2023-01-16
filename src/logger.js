const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: "debug",
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "errors.log",
      level: "error",
      format: combine(timestamp({ format: "YYYY-MM-DD HH:ss" }), logFormat),
    }),
  ],
});

module.exports = logger;
