const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Body Parser middleware

app.use(bodyParser.urlencoded({
    extended: true
}));

//Static Folder

app.use(express.static(path.join(__dirname, 'public'))); // __dirname means current directory, public is the folder where the path.join is referenced to.


//SignUp Route
app.post('/signup', (req, res) => {
    const {
        firstName,
        lastName,
        email
    } = req.body;

    //Making sure that fields are filled
    if (!firstName || !lastName || !email) {
        res.redirect('/public/fail.html');
        return
    }
}) //handling the submit

const port = process.env.PORT || 6969;

app.listen(port, console.log(`Server started on http://127.0.0.1:6969/`));