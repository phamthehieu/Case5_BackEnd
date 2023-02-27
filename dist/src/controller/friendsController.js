"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const friendsService_1 = __importDefault(require("../service/friendsService"));
class AuthController {
    constructor() {
        this.sendFriends = async (req, res) => {
            try {
                let sendFriend = req.body;
                sendFriend.status = 'confirm';
                let user = await this.FriendsService.sendFriends(sendFriend);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.confirmFriendship = async (req, res) => {
            try {
                let id = req.params.id;
                let confirm = 'friend';
                let user = await this.FriendsService.confirmFriendship(id, confirm);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.listConfirmFriends = async (req, res) => {
            try {
                let id = req.params.id;
                let status = 'confirm';
                let list = await this.FriendsService.listFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.listFriends = async (req, res) => {
            try {
                let id = req.params.id;
                let status = 'friend';
                let list = await this.FriendsService.listFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.remove = async (req, res) => {
            try {
                let id = req.body;
                let user = await this.FriendsService.remove(id);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.FriendsService = friendsService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=friendsController.js.map