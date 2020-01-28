require("dotenv").config();
const express = require("express");
// const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const http = require("http").Server(app);
let PORT = process.env.PORT || 3120;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models')
// TODO: remove cors once active development is complete
const cors = require('cors');
// TODO: remove cors once active development is complete
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("src/dist"));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        proxy: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

/* eslint-disable */

/* passport.use(new GooglePassport({
    clientID: process.env.GOOGLE_OAUTH_DEV_ID,
    clientSecret: process.env.GOOGLE_OAUTH_DEV_SECRET,
    callbackURL: "https://lvh.me:3120/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('Google accessToken:')
        console.log(accessToken)
        console.log('Google refreshToken:')
        console.log(refreshToken)
        console.log('Google profile:')
        console.log(profile)
        console.log('Google done:')
        console.log(done)
    })
) */

require("./routes/apiRoutes")(app);

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username}, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect Username!' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect Password!'});
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
});

db.sequelize.sync({ force: false }).then(function() {
    http.listen(PORT, function(){
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log("!!!!!!!! online.  access on localhost !!!!!!!")
    })
})