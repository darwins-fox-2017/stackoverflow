var express = require('express');
var router = express.Router();

// SETUP schema
let Thread = require("../../models/threadSchema.js");

var methods = {}

methods.get = function (req, res, next) {
    Thread.find()
        .then(
            function (result) {
                res.send(result)
            }
        )
}


module.exports = methods
