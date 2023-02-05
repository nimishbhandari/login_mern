const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connection/connect");

dotenv.config();
connectDB();

const app = express();

app.listen(5000, () => {
  console.log(`Running on ${5000}`);
});
