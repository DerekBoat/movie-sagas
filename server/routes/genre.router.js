const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get('/:id', (req, res) => {
    console.log('in get genres route', req.params.id);
    let queryString = `SELECT "name" FROM "genres" JOIN "movie_genres" ON "genres"."id"="movie_genres"."genre_id" 
    JOIN "movies" ON "movie_genres"."movie_id"="movies"."id" WHERE "movies"."id" = $1`;
    pool.query(queryString, [req.params.id])
        .then(results => {
            res.send(results.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;