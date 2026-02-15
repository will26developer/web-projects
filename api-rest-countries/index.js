const express = require("express");
const { connection } = require("./database/connection.js");
const cors = require("cors");
const app = express();
const port = 3000;

connection();
app.use(cors());
app.use(express.json());
const countryRouter = require("./routes/CountryRouter");
app.use("/api", countryRouter);

app.listen(port, console.log("Server run on port: ", port));
