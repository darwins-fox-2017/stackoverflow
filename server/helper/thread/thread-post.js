var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.post = function (req, res, next) {
    let thread = new Thread({
        userId: req.decode._doc._id,
        title: req.body.title,
        answers: req.body.answers,
        question: []
    });
    thread.save(function (err, result) {
        if (err) return console.error(err);
        res.send(result)
    });
}


module.exports = methods
