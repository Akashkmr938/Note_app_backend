const express = require("express");
const Notes = require("../models/NotesModel");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/saveNotes", auth, (req, res) => {
  const notes = new Notes(req.body);
  notes
    .save()
    .then(() => {
      res.send(notes);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

router.put("/editNote", auth, (req, res) => {
  const notes = new Notes(req.body);
  console.log(req.body);
  Notes.findOneAndUpdate({ _id: req.body._id }, notes, (error, resp) => {
    if (error) {
      return res.status(500).send(error);
    }
    Notes.find({ email: req.body.email }, (error, response) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(response);
    });
  });
});

router.delete("/deleteNote", auth, (req, res) => {
  console.log(req.query);
  Notes.findByIdAndDelete(req.query.id, (error, resp) => {
    if (error) {
      return res.status(500).send(error);
    }
    Notes.find({ email: req.query.email }, (error, response) => {
      if (error) {
        return res.status(500).send(error);
      }
      console.log(response);
      res.send(response);
    });
  });
});

router.get("/notes", auth, (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Invalid query param");
  }
  const email = req.query.email;

  Notes.find({ email: email }, (error, response) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    res.send(response);
  });
});

module.exports = router;
