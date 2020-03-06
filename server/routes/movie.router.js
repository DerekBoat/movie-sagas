const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// router.post('/', (req, res) => {
//   console.log("in post request", req.body);
//   let queryString =
//     'INSERT INTO feedback("feeling", "understanding", "support", "comments") VALUES($1,$2,$3,$4);';
//   pool.query(queryString, [req.body.feeling, req.body.understanding,req.body.supported,req.body.comments])
//     .then(results => {
//       res.sendStatus(200);
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

router.get('/', (req, res) => {
  console.log("in get route");
  let queryString = 'SELECT * FROM "movies" ORDER BY "id" ASC';
  pool.query(queryString)
    .then(results => {
      res.send(results.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;