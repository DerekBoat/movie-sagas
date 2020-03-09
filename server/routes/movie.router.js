const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get('/', (req, res) => {
    console.log("in get route");
    let queryString = 'SELECT * FROM "movies" ORDER BY "id" ASC';
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/:id', (req, res) => {
    console.log('in get single movie route');
    let queryString = 'SELECT "title", "description" FROM "movies" WHERE "id"=$1';
    pool.query(queryString, [req.params.id])
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})
module.exports = router;