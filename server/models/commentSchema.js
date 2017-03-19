var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/stackoverflow");

autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var commentSchema = mongoose.Schema({
    commentId: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String

});
commentSchema.plugin(autoIncrement.plugin, {
    model: 'commentSchema',
    field: 'commentId'
});

var Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
