const express = require('express');

const Router = require('./routes');
const config = require('./config');

const server = express();

let api = new Router();

server.use('/api', api.router());

server.use((err, req, res, next) => {
    res.status(500).send('Unhandled Exception!');
});

module.exports = server;
