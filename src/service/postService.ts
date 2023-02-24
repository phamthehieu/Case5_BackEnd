import {AppDataSource} from "../data-soure";
import {Posts} from "../model/posts"
class PostService {
     private postRepository
    constructor() {
         this.postRepository = AppDataSource.getRepository(Posts)

    }
    getAll = async () => {
        let sql = 'select p.content,p.image,p.role,p.time, u.userName from users u join posts p on u.idUser = p.idUser'
        let posts = await this.postRepository.query(sql)

        return posts

    }
    save = async(post) => {
         return this.postRepository.save(post)


    }
    update = async (id, newPost)=>{
        let post = await this.postRepository.findOneBy({idPost: id});
        if(!post){
            return null;
        }
        return this.postRepository.update({idPost: id}, newPost);
    }
    findById = async (id)=> {
        let post = await this.postRepository.findOneBy({idPost: id});
        if(!post){
            return null;
        }
        return post;
    }
    remove = async (id)=> {
        let post = await this.postRepository.findOneBy({idPost: id});
        if(!post){
            return null;
        }
        return  this.postRepository.delete({idPost: id});
    }
    findByName = async (search)=> {

        let sql =` select p.content,p.image,p.role,p.time, u.userName from users u join posts p on u.idUser = p.idUser where u.userName like '%${search}%'`
        let post = await this.postRepository.query(sql);
        if(!post){
            return null;
        }
        return post;
    }


}
export default new PostService();