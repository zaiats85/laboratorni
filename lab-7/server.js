const express = require('express');
const server = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helper = require('./helper');

// parse various different custom JSON types as JSON
server.use(bodyParser.json({type: 'application/json'}));
server.use(bodyParser.urlencoded({extended: true}));

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// setup the logger
server.use(morgan('combined', {stream: accessLogStream}));

// cors
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.post('/student', function (req, res, next) {

    if (Object.keys(req.body).length === 0) {
        console.log('body empty');

        helper.sendResponse(res, 500, {message: 'Invalid request'});
        return;
    }

    const {pib, group, variant, phone, email} = req.body;
    let message = `Студент <b>${pib}</b>, навчається в групі <b>${group}</b>, виконав роботу з варіантом <b>${variant}</b>.
    Йому можна зателефонувати за номером <b>${phone}</b>, він також доступний за email адресою: <b>${email} </b>`;

    helper.sendResponse(res, 200, { message: message });
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
