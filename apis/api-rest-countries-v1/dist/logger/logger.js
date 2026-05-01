"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, errors, json, printf, colorize } = winston_1.default.format;
const logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), // 🔥 stack trace automático
    json()),
    defaultMeta: { service: "countries-service" },
    transports: [
        new winston_1.default.transports.File({
            filename: "error.log",
            level: "error",
        }),
        new winston_1.default.transports.File({
            filename: "combined.log",
        }),
    ],
});
// 👇 Dev format bonito
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        format: combine(colorize(), timestamp(), printf(({ level, message, timestamp, stack }) => {
            return stack
                ? `${timestamp} ${level}: ${message} - ${stack}`
                : `${timestamp} ${level}: ${message}`;
        })),
    }));
}
exports.default = logger;
