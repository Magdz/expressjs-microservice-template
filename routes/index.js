const express = require('express');

const health = require('./health');

class Router {
    constructor() {
        this._router = express.Router();

        health(this._router);
    }

    router() {
        return this._router;
    }
}

module.exports = Router;
