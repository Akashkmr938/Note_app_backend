const jwt = require("jsonwebtoken");
const Users = require("../models/UserModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.decode(token);
    const existingUser = await Users.findOne({ email: decode.email });

    if (!existingUser) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send("Full Authorization is required");
  }
};

module.exports = auth;
