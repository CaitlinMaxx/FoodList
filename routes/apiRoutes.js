const router = require("express").Router();
const db = require("../models");

router.get("/foods", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Food.find({
    name: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(foods => res.json(foods))
    .catch(err => res.status(422).end());
});

router.get("/meal", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Food.find({
    mealType: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(foods => res.json(foods))
    .catch(err => res.status(422).end());
});
module.exports = router;
