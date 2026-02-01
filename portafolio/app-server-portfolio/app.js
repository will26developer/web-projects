require("dotenv").config()
const express = require("express");
const path = require("path"); 
const cors = require("cors");
const webRouter = require("./routes/web-routes/appRoutes");
const apiRouter = require("./routes/api-routes/apiRoutes");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(path.join(__dirname,"statics")))

app.use("/",webRouter); 
app.use("/api",apiRouter);

app.listen(port,console.log(`Server run on port ${port}`))