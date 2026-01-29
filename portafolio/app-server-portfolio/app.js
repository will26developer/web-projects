require("dotenv").config()
const express = require("express");
const path = require("path"); 
const cors = require("cors");
const appRouter = require("./routes/appRoutes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname,"statics")))

app.use("/main",appRouter)

app.listen(port,console.log(`Server run on port ${port}`))