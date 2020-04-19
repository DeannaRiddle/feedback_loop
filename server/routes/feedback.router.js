const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);

  const queryString = `INSERT INTO "feedback" 
  (feeling, understanding, support, comments, flagged, date)
  VALUES ($1,$2,$3,$4,$5,$6)`;

  pool
    .query(queryString, [
      req.body.feeling,
      req.body.understanding,
      req.body.supported
      req.body.comments,
      
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
