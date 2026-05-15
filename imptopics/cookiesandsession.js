const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(session({
    secret  : 'your_secret_key',
    resave  : false,
    saveUninitialized: true,
    cookie: { secure: false ,
        maxAge: 60000 // Set cookie expiration time (e.g., 1 minute)
    } // Set to true if using HTTPS
    
}));


//------- Route to set a cookie

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe', {
    maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Username: ${username}`);
});       

