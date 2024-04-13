"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Permission_1 = require("../entity/Permission");
const data_source_1 = require("../data-source");
class PermissionDelete {
    async delete(id) {
        try {
            const PermissionRepositorio = data_source_1.AppDataSource.getRepository(Permission_1.Permission);
            const permission = await PermissionRepositorio.findOneBy({ id: id, });
            if (!permission) {
                throw new Error("Permission not found");
            }
            await data_source_1.AppDataSource.manager.softRemove(permission);
            return permission;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.default = new PermissionDelete;
