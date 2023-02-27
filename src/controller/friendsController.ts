import FriendsService from "../service/friendsService";
import {Request, Response} from "express";

class AuthController {
    private FriendsService

    constructor() {
        this.FriendsService = FriendsService;
    }

    sendFriends = async (req: Request, res: Response) => {
        try {
            let sendFriend = req.body
            sendFriend.status = 'confirm'
            let user = await this.FriendsService.sendFriends(sendFriend)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    confirmFriendship = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let confirm = 'friend'
            let user = await this.FriendsService.confirmFriendship(id, confirm)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    listConfirmFriends = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let status = 'confirm'
            let list = await this.FriendsService.listFriends(id, status)
            res.status(200).json(list)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    listFriends = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let status = 'friend'
            let list = await this.FriendsService.listFriends(id, status)
            res.status(200).json(list)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    remove = async (req: Request, res: Response) => {
        try {
            let id = req.body
            let user = await this.FriendsService.remove(id)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new AuthController();