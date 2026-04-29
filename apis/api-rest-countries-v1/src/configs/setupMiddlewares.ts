import express, { Application } from 'express';
import cors from "cors";

export const setupMiddlewares = (app:Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true})); 
}