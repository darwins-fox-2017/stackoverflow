let db = require('../models')

const crypto = require('crypto');
const shortid = require('shortid');

var jwt = require('jsonwebtoken');

module.exports = {
    index: function(req, res, next) {
        db.User.findAll().then((users) => {
            res.json(users)
        })
    },
    create: function(req, res, next) {
        console.log('run', req.body);
        const secret = shortid.generate();
        const hash = crypto.createHmac('sha256', secret)
            .update('secret')
            .digest('hex');
        db.User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            salt: secret,
            password: hash
        }).then(() => {
          res.json({
            success: true,
            msg: 'new user registered.'
          })
        })
    },
    login: function(req, res, next) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {

            if (!user) {
                res.json({
                    success: false,
                    msg: 'Authentication failed. User not found.'
                })
            } else {
                console.log('found it');
                const hash = crypto.createHmac('sha256', user.salt)
                    .update(req.body.password)
                    .digest('hex');

                if (user.password == hash) {

                    var token = jwt.sign({ user: user }, process.env.JWT_SECRET);
                    res.json({
                        success: true,
                        msg: 'login success',
                        token: token
                    })
                }
            }
        })
    }
}
