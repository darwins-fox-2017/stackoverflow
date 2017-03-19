var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.put = function (req, res, next) {
    Thread.findOne({
        threadId: req.body.threadId
    }, function (err, document) {
        // posisi index document
        document.answers[2] = {
            content: req.body.content
        }
        console.log(document)
        document.markModified("answers");
        document.save(function (err) {
            return console.log('oke oce');
        })
    })
}

module.exports = methods
