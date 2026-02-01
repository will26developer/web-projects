const path = require("path");
const webRouter = require("../routes/web-routes/appRoutes");
const apiRouter = require("../routes/api-routes/apiRoutes");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/main");
  });

  app.use("/api", apiRouter);
  app.use("/main", webRouter);

  app.use((req, res) => {
    res.status(404).sendFile(
      path.join(__dirname, "../statics/error-page/index.html")
    );
  });
};
