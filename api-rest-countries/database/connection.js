const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/countries");
    console.log("Connected sucessfully");
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed database connection");
  }
};

module.exports = {
  connection,
};
