const express = require("express");
const Users = require("../models/UserModel");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/saveUser", (req, res) => {
  const user = new Users(req.body);
  Users.findOne({ email: user.email }, (error, resp) => {
    if (error) {
      return res.status(500).send("Internal server error");
    }
    if (!resp) {
      user
        .save()
        .then(() => {
          res.send(user);
        })
        .catch((error) => {
          res.status(400).send(error.message);
        });
    }
    res.send();
  });
});

module.exports = router;
