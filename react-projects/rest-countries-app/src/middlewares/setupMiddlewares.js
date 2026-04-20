import express from "express";
import cors from "cors";
import path from "path"

export const setupMiddlewares = app => {
    app.use(cors()); 
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static(path.join(process.cwd(),"public")));
}