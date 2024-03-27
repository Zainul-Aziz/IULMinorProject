const mongoose = require("mongoose");
const admindetail = new mongoose.Schema({
  email: {
    type: String,
    //required: true,
  },
  pass: {
    type: String,
    //required: true,
  },
});
module.exports = mongoose.model("admindata", admindetail);
