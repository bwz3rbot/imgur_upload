require('dotenv').config();

const express = require('express');
const app = express();

app.get('/auth',
    async (req, res) => {
        // await require('./service/oauth')(req.body);
        console.log('authorizing...');
        const authURL =
            new URL(`https://api.imgur.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&state=APPLICATION_STATE`);
        res.redirect(authURL);
    });
app.get('/',
    async (req, res) => {
        console.log("GOT RESPONSE:");
        console.log(req.url);
        console.log(req.query);
        console.log(req.headers);
        res.send(200);
    });

app.get('/upload',
    async (req, res) => {
        await require('./service/upload')();
        res.send('Hello World');
    });

app.listen(process.env.PORT);