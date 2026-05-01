import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { AppError } from "../errors/AppError";

const allowedOrigins = ["https://web-projects-4jun.vercel.app","http://localhost:5173"];

export const setupMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(
    cors({
      origin: (origin, callback) => {
        // permitir requests sin origin (ej: Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }

        return callback(new AppError("Not allowed by CORS",403));
      },
    }),
  );
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true }));
};
