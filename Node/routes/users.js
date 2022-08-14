const express = require("express");
const router = express.Router();

const addUser = (db, form) => {
  console.log(form);
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

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("hello");
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
    console.log("HEHER", req.body);
    addUser(db, req.body)
      .then((data) => {
        console.log("Submitted");
        // const users = data.rows;
        // res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
