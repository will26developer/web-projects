import express, { Application } from "express";
import dotenv from "dotenv";
import logger from "./logger/logger";
import { setupMiddlewares } from "./configs/setupMiddlewares";
import { setupRouters } from "./configs/setupRouters";

dotenv.config();

const app: Application = express();
const PORT = Number(process.env.PORT) || 8080;

setupMiddlewares(app);
setupRouters(app);


process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Rejection", { reason });
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception", {
    message: err.message,
    stack: err.stack,
  });
  process.exit(1);
});

app.listen(PORT, () => {
  logger.info(`Server running on port: ${PORT}`);
});
