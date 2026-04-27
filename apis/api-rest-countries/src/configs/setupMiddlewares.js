import express from "express";
import cors from "cors";

export const setupMiddlewares = app => {
  app.use(cors({
    origin: "https://web-projects-4jun.vercel.app/"
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}
