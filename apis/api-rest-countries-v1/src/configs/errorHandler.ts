import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const isDev = process.env.NODE_ENV === "development";

    if (err instanceof AppError) {
        return res.status(err.status).json({
            message: err.message,
            ...(isDev && {stack: err.stack })
        });
    }

    return res.status(500).json({
        message: err.message,
        ...(isDev && {stack: err.stack})
    })
}

