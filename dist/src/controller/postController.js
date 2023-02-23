"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const posts_1 = require("../model/posts");
const http_errors_1 = __importDefault(require("http-errors"));
const { deleteFile } = require("../utils/awsFunctions");
const PostRepo = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
class PostController {
    constructor() {
        this.findById = async (req, res) => {
            try {
                let idPost = req.params.id;
                let post = await this.blogService.findById(idPost);
                res.status(200).json(post);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
    async newPost(req, res, next) {
        try {
            const postData = {
                content: req.body.content,
                image: req.file.location,
                idUser: req.user.data.id,
                role: req.body.role,
                time: req.time
            };
            const post = await PostRepo.save(postData);
            res.status(201).json({
                success: true,
                post,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deletePost(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.id }
            });
            if (!post) {
                return next((0, http_errors_1.default)(401, "Post Not Found"));
            }
            await deleteFile(post.image);
            await PostRepo.delete({ idPost: req.params.id });
            res.status(200).json({
                success: true,
                message: "Post Deleted",
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateCaption(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.id }
            });
            if (!post) {
                return next((0, http_errors_1.default)(401, "Post Not Found"));
            }
            post.content = req.body.content;
            await PostRepo.save(post);
            res.status(200).json({
                success: true,
                message: "Post Updated",
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const posts = await PostRepo.find();
            return res.status(200).json({
                posts,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=postController.js.map