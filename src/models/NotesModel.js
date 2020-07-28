const mongoose = require("mongoose");
const validator = require("validator");

const Notes = mongoose.model("Notes", {
  title: {
    type: String,
    required: true,
    default: false,
  },
  description: {
    type: String,
    trim: true,
    required: true,
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

module.exports = Notes;
