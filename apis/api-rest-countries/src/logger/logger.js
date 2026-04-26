import { createLogger, transports, format } from "winston";
import { existsSync, mkdirSync } from "fs";

if (!existsSync("logs")) mkdirSync("logs");

export const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "warn" : "debug",
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new transports.File({ 
      filename: "logs/error.log", 
      level: "error" 
    }),
    new transports.File({ 
      filename: "logs/combined.log" 
    })
  ]
});