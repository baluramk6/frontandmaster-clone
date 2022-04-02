const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    bgimage: { type: String },
    name: { type: String },
    company: { type: String },
    about: { type: String },
    time: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("courses", coursesSchema);
