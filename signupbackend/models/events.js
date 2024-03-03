const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    team_size: {
      type: Number,
      // required: true,
    },
    fee: {
      type: Number,
      // required: true,
    },
  },
  {
    collection: "EventDetails",
  }
);
module.exports = mongoose.model("EventDetails", eventsSchema);
