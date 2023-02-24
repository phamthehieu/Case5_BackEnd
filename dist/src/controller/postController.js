"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
class PostController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let posts = await postService_1.default.getAll();
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let idPost = req.params.idPost;
                let post = await this.postService.findById(idPost);
                res.status(200).json(post);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            let a = req.body;
            let post = {
                content: a.content,
                image: a.image,
                idUser: a.idUser,
                idFriend: a.idFriend,
                role: a.role,
                time: a.time
            };
            await postService_1.default.save(post);
            res.status(200).json('Success');
        };
        this.update = async (req, res) => {
            let idPost = req.params.idPost;
            let newPost = req.body;
            await this.postService.update(idPost, newPost);
            res.status(200).json('Success!');
        };
        this.remove = async (req, res) => {
            let idPost = req.params.idPost;
            await this.postService.remove(idPost);
            res.status(200).json('Success!');
        };
        this.search = async (req, res) => {
            let search = req.query.userName;
            let blogs = await postService_1.default.findByName(search);
            res.status(200).json(blogs);
        };
        this.postService = postService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map