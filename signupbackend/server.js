const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const dotenv = require("dotenv");
var nodemailer = require("nodemailer");

dotenv.config({ path: "./config.env" });
const EMAIL_ID = process.env.EMAIL_ID;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const DB = process.env.DB_CONNECT;
mongoose
  // .connect("mongodb://localhost:27017/EventMaster", {
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`No Connection` + e);
  });

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.listen(process.env.PORT, () => {
  console.log(`server is running at port no: ${process.env.PORT}`);
});
