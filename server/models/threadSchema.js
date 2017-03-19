var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/stackoverflow");

autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var threadSchema = mongoose.Schema({
    threadId: String,
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    answers: Schema.Types.Mixed,
    title: String,
    content: String

});
threadSchema.plugin(autoIncrement.plugin, {
    model: 'threadSchema',
    field: 'threadId'
});
// userSchema.plugin(autoIncrement.plugin, 'User');

var Thread = mongoose.model('Thread', threadSchema)
module.exports = Thread
