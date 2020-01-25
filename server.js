require("dotenv").config();
const express = require("express");
// const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const http = require("http").Server(app);
let PORT = process.env.PORT || 3120;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("pub"));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        proxy: true
    })
);

http.listen(PORT, function(){
    // eslint-disable-next-line
    console.log("online.  access on localhost")
})