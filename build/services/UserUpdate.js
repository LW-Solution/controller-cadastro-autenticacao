"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
const Permission_1 = require("../entity/Permission");
const typeorm_1 = require("typeorm");
class UserUpdate {
    async update(data, id) {
        try {
            const UserRepositorio = data_source_1.AppDataSource.getRepository(User_1.User);
            const user = await UserRepositorio.findOneBy({ id: id, });
            if (!user) {
                throw new Error("User not found");
            }
            user.user_name = data.name;
            user.email = data.email;
            user.password = data.password;
            const PermissionRepositorio = data_source_1.AppDataSource.getRepository(Permission_1.Permission);
            const permissions = await PermissionRepositorio.findBy({ id: (0, typeorm_1.In)(data.permissionsId), });
            user.permissions = permissions;
            await UserRepositorio.save(user);
            return user;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new UserUpdate;
