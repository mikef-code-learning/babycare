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

    app.post('/register', function(req, res) {
        console.log('Registration request received.  req:')
        console.log(req)
        console.log('res:')
        console.log(res)
        /* db.User.create(req.body).then(function(user) {
            res.json(user);
        }); */
    });
}