var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render("landing");
})

router.get("/survey", function(req, res) {
    res.render("survey");
})

router.post("/api/friends", function(req, res) {
    db.Friend.create({
        name: req.body.name,
        image: req.body.image,
        q0: req.body.q0,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9
    }).then(function(data) {
        res.json(data);
    })
})

module.exports = router;
