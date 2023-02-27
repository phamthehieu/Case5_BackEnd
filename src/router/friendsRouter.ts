import {Router} from "express";
import FriendsController from "../controller/friendsController";

export const friendsRouter = Router()
friendsRouter.post('/send-friends', FriendsController.sendFriends)
friendsRouter.post('/confirm-friends/:id', FriendsController.sendFriends)
friendsRouter.get('/list-confirm-friends/:id', FriendsController.listConfirmFriends)
friendsRouter.get('/:id', FriendsController.listFriends)
friendsRouter.delete('/', FriendsController.remove)