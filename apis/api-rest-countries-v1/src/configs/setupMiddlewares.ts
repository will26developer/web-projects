import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";

const allowedOrigins = ["https://web-projects-4jun.vercel.app"];

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

        return callback(new Error("Not allowed by CORS"));
      },
    }),
  );
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true }));
};
