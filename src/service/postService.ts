import {AppDataSource} from "../data-source";
import {Posts} from "../model/posts"
class PostService {
     private postRepository
    constructor() {
         this.postRepository = AppDataSource.postRepository(Posts)

    }
    getAll = async () => {
        let sql = 'select p.id, p.content, p.image, u.username, c.name as nameCategory from blog_category bc join blog b on bc.idBlog = b.id join category c on bc.idCategory = c.id join user u on b.user = u.id'

    }
}