"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../controller/user");
class Users {
    constructor() {
        this.router = express.Router();
        this.userController = new user_1.UsersController();
        this.initRoutes();
    }
    initRoutes() {
        console.log('invoked ', this.router);
        this.router.get('/', function (req, res, next) {
            console.log('hello i m here !!>>>>>>>>>>', req);
        });
    }
}
exports.UsersRoutes = Users;