const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLenght: 20,
  },
  dept: {
    type: String,
    enum: ["IT", "ICT", "CSE", "ECE", "Admin", "staff"],
    default: "staff",
  },
});

const user = mongoose.model("User", userSchema);
module.exports = user;
