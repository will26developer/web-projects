import { Request, Response, NextFunction } from "express";
import path from "path";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  const isApi = req.originalUrl.startsWith("/api");
  if (isApi) {
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }

  return res.redirect(`/error/index.html?status=${status}&message=${encodeURIComponent(message)}`);
};

export default errorHandler;
