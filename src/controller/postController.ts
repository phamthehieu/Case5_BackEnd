import {AppDataSource} from "../data-soure";
import {Posts} from "../model/posts";
import createError from "http-errors";

const { deleteFile } = require("../utils/awsFunctions");
const PostRepo = AppDataSource.getRepository(Posts);

class PostController {
    async newPost(req,res,next) {
        try {
            const postData = {
                content: req.body.content,
                image: req.file.location,
                idUser: req.user.data.id,
                role: req.body.role,
                time: req.time
            }
            const post = await PostRepo.save(postData);
            res.status(201).json({
                success: true,
                post,
            });
        } catch (error) {
            next(error);
        }
    }
    async deletePost(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost : req.params.id }
            });
            if (!post) {
                return next(createError(401, "Post Not Found"));
            }
            await deleteFile(post.image);
            await PostRepo.delete({ idPost: req.params.id });
            res.status(200).json({
                success: true,
                message: "Post Deleted",
            });
        } catch (error) {
            next(error);
        }
    }
    async updateCaption(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.id }

            });
            if (!post) {
                return next(createError(401, "Post Not Found"));
            }
            post.content = req.body.content;
            await PostRepo.save(post);
            res.status(200).json({
                success: true,
                message: "Post Updated",
            });
        } catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const posts = await PostRepo.find();
            return res.status(200).json({
                posts,
            });
        } catch (error) {
            next(error);
        }
    }
    findById = async (req: Request, res: Response) => {
        try{
            let idPost = req.params.id
            let post = await this.blogService.findById(idPost);
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}