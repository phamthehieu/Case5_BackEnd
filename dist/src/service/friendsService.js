"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const friends_1 = require("../model/friends");
class FriendsService {
    constructor() {
        this.sendFriends = async (send) => {
            await this.friendsRepository.save(send);
            return 'Success';
        };
        this.confirmFriendship = async (id, confirm) => {
            await this.friendsRepository.update({ idSender: id }, { status: confirm });
            return 'Success';
        };
        this.listFriends = async (id, status) => {
            let sql = `SELECT * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'`;
            return await this.friendsRepository.query(sql);
        };
        this.remove = async (id) => {
            await this.friendsRepository.delete({ idSender: id.idSender, idReceiver: id.idReceiver });
            return 'Success';
        };
        this.friendsRepository = data_soure_1.AppDataSource.getRepository(friends_1.Friends);
    }
}
exports.default = new FriendsService();
//# sourceMappingURL=friendsService.js.map