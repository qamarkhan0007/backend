"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const express = require("express");
const http = require("https");
const bodyParser = require("body-parser");
const apiRouterFactory_1 = require("./router/apiRouterFactory");
const app = express();
mongoose.connect('mongodb://localhost:27017/myDb');
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
const server = http.createServer(app);
const router = apiRouterFactory_1.ApiRouterFactory.getApiRouter();
app.use('/', router);
server.listen(3000, function () {
    console.log('Server is running on 3000');
});