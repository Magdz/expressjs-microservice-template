const express = require('express');

module.exports = (router) => {
    let _router = express.Router();

    _router.get('/', function (request, response) {
        response.send("Healthy!");
    });

    router.use('/healthz', _router);
};
