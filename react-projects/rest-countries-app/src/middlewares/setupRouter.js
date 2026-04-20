import path from "path"; 
import router from "../router/router.js";
import express from "express"
export const setupRouter = app => {
    
  const distPath = path.join(
    process.cwd(),
    "public/rest-api-countries-frontend/dist"
  );
  
  app.use(express.static(distPath));

  app.use("/api", router);

  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) return next();

    res.sendFile("index.html", {
      root: distPath
    });
  });
}