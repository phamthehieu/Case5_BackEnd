import {Router} from "express";
import {authRouter} from "./authRouter";
import {userRouter} from "./userRouter";
import {auth} from "../middleware/auth";
import {postRouter} from "./postRouter";
export const router = Router()
router.use('/auth', authRouter)
// router.use(auth)
router.use('/users', userRouter)
router.use('/posts', postRouter)