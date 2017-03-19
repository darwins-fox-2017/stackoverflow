var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.delete = function (req, res, next) {
    Thread.findOneAndRemove({
        threadId: req.body.threadId
    }, function (err, Content) {
        var response = {
            message: `Content with contentId ${req.body.threadId} successfully deleted`
        };
        res.send(response);
    });
}


module.exports = methods
