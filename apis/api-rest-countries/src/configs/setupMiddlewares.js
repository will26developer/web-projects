import express from "express";
import cors from "cors";

export const setupMiddlewares = app => {
  app.use(cors({
    origin: process.env.FRONTEND_URL
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}
