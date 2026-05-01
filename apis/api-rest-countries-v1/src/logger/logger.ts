import winston from "winston";

const { combine, timestamp, errors, json, printf, colorize } = winston.format;

const logger: winston.Logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp(),
    errors({ stack: true }), // 🔥 stack trace automático
    json(),
  ),
  defaultMeta: { service: "countries-service" },
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "combined.log",
    }),
  ],
});

// 👇 Dev format bonito
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        printf(({ level, message, timestamp, stack }) => {
          return stack
            ? `${timestamp} ${level}: ${message} - ${stack}`
            : `${timestamp} ${level}: ${message}`;
        }),
      ),
    }),
  );
}

export default logger;
