"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../errors/AppError");
const logger_1 = __importDefault(require("../logger/logger"));
const errorHandler = (err, req, res, next) => {
    const isDev = process.env.NODE_ENV === "development";
    const context = {
        method: req.method,
        url: req.originalUrl,
        query: req.query,
    };
    if (err instanceof AppError_1.AppError) {
        logger_1.default.warn("Handled AppError", {
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
    logger_1.default.error("Unhandled error", {
        message: err.message,
        stack: err.stack,
        ...context,
    });
    return res.status(500).json({
        message: isDev ? err.message : "Internal Server Error",
        ...(isDev && { stack: err.stack }),
    });
};
exports.errorHandler = errorHandler;
