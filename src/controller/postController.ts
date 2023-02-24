import {Request, Response} from "express";
import postService from "../service/postService";

class PostController {
    private postService;
    constructor() {
        this.postService = postService;

    }
    getAll = async (req: Request, res: Response) => {
        try{
            let posts = await postService.getAll();
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findById = async (req: Request, res: Response) => {
        try{
            let idPost = req.params.idPost
            let post = await this.postService.findById(idPost);
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    create = async (req: Request, res: Response) => {
        let a = req.body;

        let post = {
            content : a.content,
            image : a.image,
            idUser: a.idUser,
            idFriend: a.idFriend,
            role: a.role,
            time: a.time
        };
        await postService.save(post);

        res.status(200).json('Success');
    }
    update = async (req: Request, res: Response) => {
        let idPost = req.params.idPost;
        let newPost = req.body;
        await this.postService.update(idPost, newPost);
        res.status(200).json('Success!')
    }
    remove = async (req: Request, res: Response) => {
        let idPost = req.params.idPost;
        await this.postService.remove(idPost);
        res.status(200).json('Success!')

    }
    search = async (req: Request, res: Response) => {
        let search = req.query.userName;
        let blogs = await postService.findByName(search);
        res.status(200).json(blogs)
    }





}
export default new PostController();