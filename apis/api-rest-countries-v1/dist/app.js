"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger/logger"));
const setupMiddlewares_1 = require("./configs/setupMiddlewares");
const setupRouters_1 = require("./configs/setupRouters");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8080;
(0, setupMiddlewares_1.setupMiddlewares)(app);
(0, setupRouters_1.setupRouters)(app);
process.on("unhandledRejection", (reason) => {
    logger_1.default.error("Unhandled Rejection", { reason });
});
process.on("uncaughtException", (err) => {
    logger_1.default.error("Uncaught Exception", {
        message: err.message,
        stack: err.stack,
    });
    process.exit(1);
});
app.listen(PORT, () => {
    logger_1.default.info(`Server running on port: ${PORT}`);
});
