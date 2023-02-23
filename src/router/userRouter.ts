import {Router} from "express";
import UserController from "../controller/userController";
import {checkRole} from "../middleware/checkRole";

export const userRouter = Router()
userRouter.get('/list-users',checkRole, UserController.showListUser)
userRouter.put('/edit/:id', UserController.editUser)
userRouter.put('/lock/:id',checkRole, UserController.lockUser)
userRouter.put('/password/id', UserController.changePassword)
userRouter.get('/profile/:id', UserController.showProfile)