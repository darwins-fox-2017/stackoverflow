var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/stackoverflow");

autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var userSchema = mongoose.Schema({
    userId: String,
    name: String,
    username: String,
    email: String,
    password: String
});
userSchema.plugin(autoIncrement.plugin, {
    model: 'userSchema',
    field: 'userId'
});
// userSchema.plugin(autoIncrement.plugin, 'User');
userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema)
module.exports = User
