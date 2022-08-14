const express = require("express");
const router = express.Router();

const addUser = () => {
  const query = `INSERT INTO users
  (name, personal_id, department, employment_status, email)
  VALUES ($1, $2, $3, $4, $5);`;
};

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/submit", (req, res) => {
    console.log(req.body);
    addUser(req.body)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
