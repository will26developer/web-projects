import { logger } from "../logger/logger.js"

export const errorHandler = (err, req, res, next) => {
  const errorMessage = {
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
    timestamp: new Date().toISOString()
  };

  logger.error(errorMessage)

  return res.status(err.status || 500).json(errorMessage)
}
