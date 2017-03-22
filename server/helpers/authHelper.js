var jwt = require('jsonwebtoken');

module.exports = {
    verify: function(req, res, next) {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, function(err, decoded) {
            console.log(decoded) // bar
            next()
        });
    }
}
