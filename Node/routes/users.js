const express = require("express");
const router = express.Router();

const addUser = (db, form) => {
  const query = `INSERT INTO users
  (name, personal_id, department, employment_status, email)
  VALUES ($1, $2, $3, $4, $5);`;
  const values = [
    form.name,
    form.id,
    form.department,
    form.employment,
    form.email,
  ];
  return db.query(query, values);
};

const searchUsers = (db, field, input) => {
  const query = `SELECT * FROM users
  WHERE ${field} LIKE $1;`;
  const values = [`%${input}%`];
  return db.query(query, values);
};

module.exports = (db) => {
  router.get(`/search/:field/:input`, (req, res) => {
    searchUsers(db, req.params.field, req.params.input)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
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
