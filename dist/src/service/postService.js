"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const posts_1 = require("../model/posts");
class PostService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select p.id, p.content, p.image, u.username, c.name as nameCategory from blog_category bc join blog b on bc.idBlog = b.id join category c on bc.idCategory = c.id join user u on b.user = u.id';
        };
        this.postRepository = data_source_1.AppDataSource.postRepository(posts_1.Posts);
    }
}
//# sourceMappingURL=postService.js.map