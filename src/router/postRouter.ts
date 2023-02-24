import { Router } from "express";
import PostController from "../controller/postController";


export const postRouter = Router ()
postRouter.get('/',PostController.getAll);
postRouter.post('/',PostController.create);
postRouter.put('/:idPost',PostController.update);
postRouter.delete('/:idPost',PostController.remove);
postRouter.get('/findById/:idPost',PostController.findById);
postRouter.get('/search/findByName', PostController.search);



