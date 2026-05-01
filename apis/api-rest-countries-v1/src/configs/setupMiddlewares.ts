import express, { Application } from 'express';
import cors from "cors";
import helmet from 'helmet';

export const setupMiddlewares = (app:Application) => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json({limit:"10kb"}));
    app.use(express.urlencoded({extended: true})); 
}