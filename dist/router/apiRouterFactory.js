"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("./user");
class ApiRouterFactory {
    constructor() {
    }
    static getApiRouter() {
        const router = express.Router();
        const userRoutes = new user_1.UsersRoutes().router;
        router.use('/user', userRoutes);
        return router;
    }
}
exports.ApiRouterFactory = ApiRouterFactory;