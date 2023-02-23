import AuthService from "../service/authService";
import {Request, Response} from "express";
class AuthController {
    private AuthService
    constructor() {
        this.AuthService = AuthService;
    }
    login = async (req: Request, res: Response) => {
        try {
            let user = await this.AuthService.checkUser(req.body)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    register = async (req, res) => {
        try {
            let user = await this.AuthService.register(req.body)
            res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new AuthController();