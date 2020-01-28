const db = require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = function(app) {
    // POST route for user auth
    app.post('/login',
        passport.authenticate('local'), 
        function(req, res) {
            const response = {
                userAuthed: true,
            }
            res.send(response)
        }
    );

    app.post('/register', async function(req, res) {
        const existingUserCheck = await db.User.findOne({ where: { email: req.body.email } })
        if (existingUserCheck === null) {
            db.User.create(req.body).then(function(user) {
                const response = {
                    success: true,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                }
                res.send(response);
            });
        } else {
            const response = {
                success: false,
                msg: 'User Exists.'
            }
            res.send(response)
        }
    });
}