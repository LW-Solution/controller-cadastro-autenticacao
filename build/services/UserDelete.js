"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
class UserDelete {
    async delete(id) {
        try {
            const UserRepositorio = data_source_1.AppDataSource.getRepository(User_1.User);
            const user = await UserRepositorio.findOneBy({ id: id, });
            if (!user) {
                throw new Error("User not found");
            }
            await UserRepositorio.remove(user);
            return user;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new UserDelete;
