var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/stackoverflow');

let User = require("./models/userSchema.js");
let Thread = require("./models/threadSchema.js");
let Comment = require("./models/commentSchema.js");


// Thread.findOne({
//     threadId: 10
// }, function (err, document) {
//     document.answers[2] = {
//         content: "akhirnya berubah juga"
//     }
//     console.log(document)
//     document.markModified("answers");
//     document.save(function (err) {
//         return console.log('oke oce');
//     })
// })

Thread.update({
    threadId: 10
}, {
    "$pull": {
        "answers": {
            "content": "Nyalain dulu kompor nya bos"
        }
    }
}, {
    safe: true,
    multi: true
}, function (err, obj) {
    console.log(obj);
});
