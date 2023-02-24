declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (post: any) => Promise<any>;
    update: (id: any, newPost: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    findByName: (search: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;
