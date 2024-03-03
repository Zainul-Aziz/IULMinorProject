const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/EventMaster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`No Connection`);
  });

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.listen(4000, () => {
  console.log(`server is running at port no 4000`);
});
