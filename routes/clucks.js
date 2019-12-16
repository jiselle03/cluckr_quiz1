const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

// List All
router.get("/", (req, res) => {
    queries.getAll().then(clucks => {
      res.render('index', { clucks });
    });
  });

// Add
router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  queries.add({
    username: req.cookies.username,
    content: req.body.content,
    image_url: req.body.image_url
  }).then(cluck => {
    res.redirect('/');
  });
});

module.exports = router;