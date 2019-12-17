const express = require("express");
const router = express.Router();
const utils = require('../utils')

const queries = require("../db/queries");

// List All
router.get("/", (req, res) => {
    queries.getAll().then(clucks => {
      res.render('index', { clucks, utils });
    });
  });

// Add
router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  queries.add({
    username: req.cookies.username,
    avatar: req.cookies.avatar,
    content: req.body.content,
    image_url: req.body.image_url
  }).then(cluck => {
    res.redirect('/');
  });
});

module.exports = router;