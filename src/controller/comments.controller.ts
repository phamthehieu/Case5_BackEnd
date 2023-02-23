import { AppDataSource } from "src/data-soure";
import { Users } from "src/model/users";
import { Comments } from "src/model/comments";
import { Posts } from "src/model/posts";
import createError from "http-errors";

const CommentRepo = AppDataSource.getRepository(Comments);
const PostRepo = AppDataSource.getRepository(Posts);

class CommentController {
async newComment(req, res, next) {
    try {
      const post = await PostRepo.findOne({
        where: { idPost: req.params.idPosts },
      });
      if (!post) {
        return next(createError(401, "Post Not Found"));
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
    } catch (error) {
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
        return next(createError(404, "Post Not Found"));
      }
      if (comment.Users.idUser !== req.user.data.idUser) {
        return next(createError(401, "User Not Authenticated"));
      }
      await CommentRepo.delete({ idComment: req.params.idComment });
      res.status(200).json({
        success: true,
        message: "Comment Delete Success",
      });
    } catch (error) {
      next(error);
    }
  }
};
 