const webRoutes = require("../routes/webRoutes/webRoutes");
const errorRoutes = require("../routes/errorRoutes/errorRoute");
const errorHandler = require("./errorHandler");
const apiRoutes = require("../routes/apiRoutes/apiRoute");
 
module.exports = (app) => {
    app.use("/main",webRoutes); 
    app.use("/api",apiRoutes)
    app.use(errorRoutes);

    app.use((req, res, next) => {
        const err = new Error("Route not found");
        err.statusCode = 404;
        next(err);
    });

    app.use(errorHandler);

}