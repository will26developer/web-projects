const webRouter = require("../routes/webRouter/webRouter"); 
const erroHandler = require("../configs/errorHandler");
const errorRouter = require("../routes/errorRoutes/errorRouter");
const apiRoutes = require("../routes/apiRoutes/apiRouter");

module.exports = (app) => {
    app.use("/main",webRouter); 
    app.use("/api",apiRoutes)
    app.use(errorRouter);
    app.use((req,res,next) => {
        const err = new Error("Route not found"); 
        err.statusCode = 404;
        next(err);
    });

    app.use(erroHandler);
}