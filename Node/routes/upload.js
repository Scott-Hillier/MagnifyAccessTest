const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/submit", (req, res) => {
    addUser(db, req.body)
      .then((data) => {
        console.log("Submitted");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
