"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Permission_1 = require("../entity/Permission");
const data_source_1 = require("../data-source");
class PermissionUpdate {
    async update(id, data) {
        try {
            const PermissionRepositorio = data_source_1.AppDataSource.getRepository(Permission_1.Permission);
            const permission = await PermissionRepositorio.findOneBy({ id: id, });
            if (!permission) {
                throw new Error("Permission not found");
            }
            permission.name = data.name;
            await PermissionRepositorio.save(permission);
            return permission;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new PermissionUpdate;
