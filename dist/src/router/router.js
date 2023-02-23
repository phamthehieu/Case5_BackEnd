"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authRouter_1 = require("./authRouter");
const userRouter_1 = require("./userRouter");
const CommentRouter_1 = require("./CommentRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', authRouter_1.authRouter);
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/comment', CommentRouter_1.commentRouter);
//# sourceMappingURL=router.js.map