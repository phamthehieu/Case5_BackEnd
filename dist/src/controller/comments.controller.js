"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("src/data-soure");
const comments_1 = require("src/model/comments");
const posts_1 = require("src/model/posts");
const http_errors_1 = __importDefault(require("http-errors"));
const CommentRepo = data_soure_1.AppDataSource.getRepository(comments_1.Comments);
const PostRepo = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
class CommentController {
    async newComment(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.idPosts },
            });
            if (!post) {
                return next((0, http_errors_1.default)(401, "Post Not Found"));
            }
            const comment = await CommentRepo.save({
                idUser: req.users.data.idUser,
                content: req.body.comment,
                idPosts: req.params.id,
            });
            res.status(201).json({
                success: true,
                comment,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async DeleteComment(req, res, next) {
        try {
            const comment = await CommentRepo.findOne({
                where: { idComment: req.params.idComment },
                relations: {
                    user: true,
                },
            });
            if (!comment) {
                return next((0, http_errors_1.default)(404, "Post Not Found"));
            }
            if (comment.Users.idUser !== req.user.data.idUser) {
                return next((0, http_errors_1.default)(401, "User Not Authenticated"));
            }
            await CommentRepo.delete({ id: req.params.id });
            res.status(200).json({
                success: true,
                message: "Comment Delete Success",
            });
        }
        catch (error) {
            next(error);
        }
    }
}
;
//# sourceMappingURL=comments.controller.js.map