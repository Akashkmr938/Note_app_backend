const mongoose = require("mongoose");
const validator = require("validator");

const Users = mongoose.model("Users", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error("Invalid Email");
      }
    },
  },
});

module.exports = Users;
