"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
class UserGet {
    async getAll() {
        const users = await data_source_1.AppDataSource.manager.find(User_1.User);
        return users;
    }
    async getById(id) {
        try {
            const UserRepositorio = data_source_1.AppDataSource.getRepository(User_1.User);
            const user = await UserRepositorio.findOne({ relations: ["permissions"], where: { id: id, } });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new UserGet;
