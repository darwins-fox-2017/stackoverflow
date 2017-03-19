var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.get = function (req, res, next) {
    Thread.findOne({
            threadId: req.params.threadId
        })
        .then(function (result) {
            res.send(result.answers)
        })
}

module.exports = methods
