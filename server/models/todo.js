const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: [String],
});
const model = new mongoose.model("Model", userSchema);
module.exports = model;
