import {AppDataSource} from "../data-soure";
import {Friends} from "../model/friends";
class FriendsService {
    private friendsRepository;
    constructor() {
        this.friendsRepository = AppDataSource.getRepository(Friends);
    }
    sendFriends = async (send) => {
       await this.friendsRepository.save(send)
        return 'Success'
    }
    confirmFriendship = async (id,confirm) => {
        await this.friendsRepository.update({idSender: id},{status: confirm})
        return 'Success'
    }
    listFriends = async (id, status) => {
        let sql = `SELECT * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'`
        return await this.friendsRepository.query(sql)
    }
    remove = async (id) => {
        await this.friendsRepository.delete({idSender: id.idSender, idReceiver: id.idReceiver})
        return 'Success'
    }
}
export default new FriendsService()