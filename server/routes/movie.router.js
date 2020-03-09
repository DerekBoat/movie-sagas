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

router.post('/', (req, res) => {
    let queryValues = req.body;
    console.log('in edit post', queryValues);
    let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3`;
    pool.query(queryText, [queryValues.movieTitle, queryValues.movieDescription, queryValues.movieId])
        .then((results) => {
            console.log(results)
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error updating movie', error);
            res.sendStatus(500);
        })
})
// router.post('/', (req, res)=>{
//     //call to update title and description from DB for movie selected to edit
//     let updates = req.body;
//     let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3`;
//     let queryValues = [
//         updates.newTitle,
//         updates.newDescription,
//         updates.movieId
//     ];
//     pool.query(queryText, queryValues).then((results)=>{
//         console.log(results)
//         res.sendStatus(200)
//     }).catch((error)=>{
//         console.log('error updating movie', error);
//         res.sendStatus(500);
//     })
// })
module.exports = router;