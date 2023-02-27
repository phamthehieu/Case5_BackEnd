declare class FriendsService {
    private friendsRepository;
    constructor();
    sendFriends: (send: any) => Promise<string>;
    confirmFriendship: (id: any, confirm: any) => Promise<string>;
    listFriends: (id: any, status: any) => Promise<any>;
    remove: (id: any) => Promise<string>;
}
declare const _default: FriendsService;
export default _default;
