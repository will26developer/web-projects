import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import logger from "../logger/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isDev = process.env.NODE_ENV === "development";

  const context = {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
  };

  if (err instanceof AppError) {
    
    logger.warn("Handled AppError", {
      message: err.message,
      status: err.status,
      stack: err.stack,
      ...context,
    });

    return res.status(err.status).json({
      message: err.message,
      ...(isDev && { stack: err.stack }),
    });
  }

  logger.error("Unhandled error", {
    message: err.message,
    stack: err.stack,
    ...context,
  });

  return res.status(500).json({
    message: isDev ? err.message : "Internal Server Error",
    ...(isDev && { stack: err.stack }),
  });
};
