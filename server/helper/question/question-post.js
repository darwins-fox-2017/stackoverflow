var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.post = function (req, res, next) {
    var answer = {
        content: req.body.content
    }

    Thread.findOneAndUpdate({
            threadId: req.body.threadId
        }, {
            $push: {
                answers: answer
            }
        }, {
            safe: true,
            upsert: true
        },
        function (err, model) {
            res.send(model)
        }
    );
}

module.exports = methods
