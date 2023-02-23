"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authRouter_1 = require("./authRouter");
const userRouter_1 = require("./userRouter");
const postRouter_1 = require("./postRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', authRouter_1.authRouter);
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/posts', postRouter_1.postRouter);
//# sourceMappingURL=router.js.map