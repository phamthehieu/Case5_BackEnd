import {AppDataSource} from "../data-soure";
import {Users} from "../model/users";

class UserService {
    private userRepository
    constructor() {
        this.userRepository = AppDataSource.getRepository(Users)
    }
    editUser = async (id, newUser) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        if (!user) {
            return null;
        }
        return await this.userRepository.update({idUser: id}, newUser)
    }
    getAll = async () => {
        let user = await this.userRepository.find()
        return user
    }
    getUser = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        return user;
    }
    lock = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        if (!user) {
            return null;
        } else {
            if (user.status === 'open') {
                return this.userRepository.update({idUser: id}, {status: 'locked'})
            } else {
                return this.userRepository.update({idUser: id}, {status: 'open'})
            }
        }
    }
    changePassword = async (user, newPass) => {
        return await this.userRepository.update({idUser: user.idUser}, {password:newPass})
    }
    findUser = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        if (!user) {
            return null;
        }else{
            return user
        }
    }
}
export default new UserService()