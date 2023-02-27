import { Request, Response } from "express";
declare class AuthController {
    private FriendsService;
    constructor();
    sendFriends: (req: Request, res: Response) => Promise<void>;
    confirmFriendship: (req: Request, res: Response) => Promise<void>;
    listConfirmFriends: (req: Request, res: Response) => Promise<void>;
    listFriends: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
