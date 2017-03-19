var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.put = function (req, res, next) {
    Thread.findOneAndUpdate({
        threadId: req.body.threadId
    }, {
        $set: {
            title: req.body.title,
            content: req.body.content
        }
    }, {
        new: true
    }, function (err, result) {
        if (err) return res.send(err.message);
        res.send(result);
    });
}

module.exports = methods
