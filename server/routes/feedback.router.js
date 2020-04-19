const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);

  const queryString = `INSERT INTO "feedback" 
  (feeling, understanding, support, comments, flagged, date)
  VALUES ($1,$2,$3,$4,$5,$6)`;

  const address = req.body.customer_address
    ? req.body.customer_address
    : "pickup";

  let feedback = "";

  for (let feedback of req.body.feedback) {
    feedback += `${feedback}`;
  }

  pool
    .query(queryString, [
      req.body.customer_first_name,
      req.body.customer_last_name,
      address,
      req.body.order_type,
      pizzas,
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
